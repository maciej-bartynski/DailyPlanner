import AsyncStorage from '@react-native-async-storage/async-storage';
import {iTable} from './_types';
import {
  storageItemToItem,
  keyToStorageKey,
  getRandomToken,
  itemToStorageItem,
} from './table.helpers';

class Storage implements iTable {
  constructor(public prefix: string) {}

  async getAll<RecordType>() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const thisStorageKeys = keys.filter(
        key => key.split('_')[0] === this.prefix,
      );
      const allStorageStrings = await AsyncStorage.multiGet(thisStorageKeys);

      const arrValuesOnly = allStorageStrings.reduce<
        Record<string, RecordType>
      >((result, entry) => {
        const [, storageString] = entry;
        if (storageString) {
          const {item, _id} = storageItemToItem(storageString);
          return {
            ...result,
            [_id]: {id: _id, ...item},
          };
        } else {
          return result;
        }
      }, {});

      const toReturn: [string, Record<string, RecordType>] = [
        '',
        arrValuesOnly,
      ];
      return toReturn;
    } catch (e) {
      const toReturn: [string, null] = [`${e}`, null];
      return toReturn;
    }
  }

  async getItem<ItemType = unknown>(
    id: string,
  ): Promise<[string, ItemType | null, number?, string?]> {
    const storageKey = keyToStorageKey(this, id);
    try {
      const storageString = (await AsyncStorage.getItem(storageKey)) || '';
      if (!storageString) {
        return ['Nothing found', null];
      }
      const {item, _createdAt, _id} = storageItemToItem(storageString);
      return ['', {id: id, ...item}, _createdAt, _id];
    } catch (e) {
      return [`${e}`, null];
    }
  }

  async setItem(itemToSet: unknown) {
    const randomId = getRandomToken();
    const storageKey = keyToStorageKey(this, randomId);
    const storageItem = itemToStorageItem(itemToSet, randomId);
    try {
      await AsyncStorage.setItem(storageKey, storageItem);
      return ['', randomId];
    } catch (e) {
      return [`${e}`, null];
    }
  }

  async delItem(key: string) {
    const storageKey = keyToStorageKey(this, key);
    try {
      await AsyncStorage.removeItem(storageKey);
      return ['', null];
    } catch (e) {
      return [`${e}`, null];
    }
  }

  async patchItem<FieldsType>(key: string, fields: Record<string, unknown>) {
    const [err, item, createdAt] = await this.getItem<FieldsType>(key);

    if (!item) {
      return [`Item not found - ${err}`, null];
    }

    const newItem = {
      ...item,
      ...fields,
    };

    const storageItem = itemToStorageItem(newItem, key, createdAt);
    const storageKey = keyToStorageKey(this, key);

    try {
      await AsyncStorage.setItem(storageKey, storageItem);
      return ['', null];
    } catch (e) {
      return [`${e}`, null];
    }
  }
}

export default Storage;
