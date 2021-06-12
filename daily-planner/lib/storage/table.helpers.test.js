import {
    getRandomToken,
    CHARACTERS,
    itemToStorageItem,
    storageItemToItem,
    storageKeyToKey,
    keyToStorageKey
} from "./table.helpers";

describe("lib/storage/test.helpers", () => {
    it("[getRandomToken] Produces legit token", () => {
        const token = getRandomToken();
        const tokenWithoutDate = token.split(".")[1];
        expect(typeof token).toBe("string");
        expect(tokenWithoutDate.length).toBe(CHARACTERS.length);
    })

    it("[getRandomToken] Tokens never duplicate", () => {
        const tokensStore = {};
        for (let i = 0; i < 1000; i++) {
            tokensStore[getRandomToken()] = true;
        }
        const tokensAmount = Object.keys(tokensStore).length
        expect(tokensAmount).toBe(1000);
    })

    it("[itemToStorageItem] Produces storage item from any data", () => {
        const dataStore = {
            someNumber: 5,
            someString: "my string",
            someBoolean: true,
            someArray: [1, "next item", { name: "name" }, [true, false, NaN]],
            someObject: { name: "John", surname: "Doe" }
        }

        Object.entries(dataStore).forEach(entry => {
            const [name, value] = entry;
            const storageString = itemToStorageItem(value, `${getRandomToken()}`);
            const storageItem = JSON.parse(storageString);
            const { _createdAt, _id, item } = storageItem;
    
            expect(typeof _createdAt).toBe("number");
            expect((_id.split(".")[1]).length).toBe(CHARACTERS.length);
            expect(JSON.stringify(item)).toBe(JSON.stringify(dataStore[name]));
        })
    })

    it("[storageItemToItem] Produces item from storageItem", () => {
        for (let i = 0; i < 1000; i++) {

            const thisItemDate = Date.now();
            const thisItemId = getRandomToken();
            const thisItemData = {
                someKey: `some random string ${i}.`,
                otherKey: i,
            }

            const storageItem = JSON.stringify({
                _createdAt: thisItemDate,
                _id: thisItemId,
                item: thisItemData
            });

            const { _createdAt, _id, item } = storageItemToItem(storageItem);

            expect(_createdAt).toBe(thisItemDate);
            expect(_id).toBe(thisItemId);
            expect(JSON.stringify(item)).toBe(JSON.stringify(thisItemData))


        }
    })

    it("[storageKeyToKey] Produces key from prefixed key", () => {
        const mockTable = { prefix: "some-prefix" };
        const myKey = "some-item-key";
        const storageKey = `${mockTable.prefix}_${myKey}`;
        const producedKey = storageKeyToKey(storageKey);
        expect(producedKey).toBe(myKey)
    })

    it("[keyToStorageKey] Produces prefixed key from key", () => {
        const mockTable = { prefix: "some-prefix" };
        const myKey = "some-item-key";
        const storageKey = `${mockTable.prefix}_${myKey}`;
        const producedKey = keyToStorageKey(mockTable, myKey);
        expect(producedKey).toBe(storageKey);
    })
})