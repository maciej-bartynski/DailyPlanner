import { iTable, iStorageItem } from './_types';

export const CHARACTERS = 'qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()';
export const getRandomToken = () => {
  let token = `${Date.now()}.`;
  for (let i = 0; i < CHARACTERS.length; i++) {
    const caseMethod = Math.random() < 0.5 ? 'toLowerCase' : 'toUpperCase';
    let currentChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    currentChar = currentChar[caseMethod]
      ? currentChar[caseMethod]()
      : currentChar;
    token += currentChar;
  }
  return token;
};

export function keyToStorageKey<ItemType> (self: iTable<ItemType>, key: string) {
  return `${self.prefix}_${key}`;
};

export const itemToStorageItem = (
  item: unknown,
  id: string,
  createdAt?: number,
) => {
  const storageItem = JSON.stringify({
    _createdAt: createdAt ? createdAt : Date.now(),
    _updatedAt: Date.now(),
    _id: id,
    item,
  });

  return storageItem;
};

export function storageItemToItem<ItemType> (storageItem: string): iStorageItem<ItemType> {
  const parsedItem = JSON.parse(storageItem);
  return parsedItem;
};

export const storageKeyToKey = (storageKey: string) => {
  const [, key] = storageKey.split('_');
  return key;
};
