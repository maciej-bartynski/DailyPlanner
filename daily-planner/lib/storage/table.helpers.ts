import { iTable } from "./_types";

export const CHARACTERS = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()";
export const getRandomToken = () => {
    let token = `${Date.now()}.`;
    for (let i = 0; i < CHARACTERS.length; i++) {
        const caseMethod = Math.random() < 0.5 ? "toLowerCase" : "toUpperCase";
        let currentChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        currentChar = currentChar[caseMethod] ? currentChar[caseMethod]() : currentChar;
        token += currentChar;
    }
    return token;
}

export const keyToStorageKey = (self: iTable, key: string) => {
    return `${self.prefix}_${key}`;
}

export const itemToStorageItem = (
    item: unknown,
    id: string,
    createdAt?: number,
) => {
    const storageItem = JSON.stringify({
        _createdAt: createdAt ? createdAt : Date.now(),
        _updatedAt: createdAt ? Date.now() : undefined,
        _id: id,
        item
    })

    return storageItem
}


export const storageItemToItem = (storageItem: string) => {
    const parsedItem = JSON.parse(storageItem);
    return parsedItem;
}

export const storageKeyToKey = (storageKey: string) => {
    const [, key] = storageKey.split("_");
    return key;
}