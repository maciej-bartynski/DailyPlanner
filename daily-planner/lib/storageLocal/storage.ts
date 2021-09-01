import AsyncStorage from '@react-native-async-storage/async-storage';
import { iTable, iStorageItem } from './_types';
import {
  storageItemToItem,
  keyToStorageKey,
  getRandomToken,
  itemToStorageItem,
} from './table.helpers';

class Storage<ItemType> implements iTable<ItemType> {
  constructor(public prefix: string) { }

  async getAll() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const thisStorageKeys = keys.filter(
        key => key.split('_')[0] === this.prefix,
      );
      const allStorageStrings = await AsyncStorage.multiGet(thisStorageKeys);

      const allStorageItemsAsObject = allStorageStrings.reduce<Record<string, iStorageItem<ItemType>>>
        ((result, entry) => {
          const [, storageString] = entry;
          if (storageString) {
            const item = storageItemToItem<ItemType>(storageString);
            return {
              ...result,
              [item._id]: item,
            };
          } else {
            return result;
          }
        }, {});

      const toReturn: [string, Record<string, iStorageItem<ItemType>>] = [
        '',
        allStorageItemsAsObject,
      ];
      return toReturn;
    } catch (e) {
      const toReturn: [string, null] = [`${e}`, null];
      return toReturn;
    }
  }

  async getItem(
    id: string,
  ): Promise<[string, iStorageItem<ItemType> | null]> {
    const storageKey = keyToStorageKey<ItemType>(this, id);
    try {
      const storageString = (await AsyncStorage.getItem(storageKey)) || '';
      if (!storageString) {
        return ['Nothing found', null];
      }
      const item = storageItemToItem<ItemType>(storageString);
      return ['', item];
    } catch (e) {
      return [`${e}`, null];
    }
  }

  async setItem(itemToSet: ItemType): Promise<[string, iStorageItem<ItemType> | null]> {
    const randomId = getRandomToken();
    const storageKey = keyToStorageKey<ItemType>(this, randomId);
    const storageItem = itemToStorageItem(itemToSet, randomId);
    const item = storageItemToItem<ItemType>(storageItem);
    try {
      await AsyncStorage.setItem(storageKey, storageItem);
      return ['', item];
    } catch (e) {
      return [`${e}`, null];
    }
  }

  async delItem(key: string) {
    const storageKey = keyToStorageKey<ItemType>(this, key);
    try {
      await AsyncStorage.removeItem(storageKey);
      return ['', null];
    } catch (e) {
      return [`${e}`, null];
    }
  }

  async patchItem(key: string, fields: Partial<ItemType>): Promise<[string, iStorageItem<ItemType> | null]> {
    const [err, item] = await this.getItem(key);

    if (!item) {
      return [`Item not found - ${err}`, null];
    }

    const newFields = {
      ...item.item,
      ...fields
    };

    const storageItem = itemToStorageItem(newFields, key, item._createdAt);
    const storageKey = keyToStorageKey<ItemType>(this, key);
    const itemToReturn = storageItemToItem<ItemType>(storageItem)

    try {
      await AsyncStorage.setItem(storageKey, storageItem);
      return ['', itemToReturn];
    } catch (e) {
      return [`${e}`, null];
    }
  }
}

export default Storage;
