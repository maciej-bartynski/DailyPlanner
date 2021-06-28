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

  async getItem(id: string) {
    const storageKey = keyToStorageKey(this, id);
    try {
      const storageString = (await AsyncStorage.getItem(storageKey)) || '';
      if (!storageString) {
        return ['Nothing found', null];
      }
      const {item, _createdAt, _id} = storageItemToItem(storageString);
      return ['', item, _createdAt, _id];
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

  async patchItem(key: string, fields: Record<string, unknown>) {
    const [err, item, createdAt] = await this.getItem(key);

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
