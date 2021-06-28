import Storage from './storage';
import {CHARACTERS} from './table.helpers';

const testPrefix = 'testPrefix';
const testStorage = new Storage(testPrefix);

const itemToSet = {name: 'some text', value: 5};
let keyToGet = '';

describe('lib/storage/storage', () => {
  it('[setItem] Sets correctly', async () => {
    const [err, key] = await testStorage.setItem(itemToSet);
    keyToGet = key;
    expect(err).toBeFalsy();
    expect(key?.split('.')[1]?.length).toBe(CHARACTERS.length);
  });

  it('[getItem] Gets correctly', async () => {
    const [err, item] = await testStorage.getItem(keyToGet);
    expect(item?.name).toBe(itemToSet.name);
    expect(err).toBeFalsy();
  });

  it('[patchItem] Patches correctly', async () => {
    const [err] = await testStorage.patchItem(keyToGet, {name: 'new-text'});
    const [err2, item] = await testStorage.getItem(keyToGet);

    expect(item?.name).toBe('new-text');
    expect(item?.value).toBe(itemToSet.value);
    expect(err).toBeFalsy();
    expect(err2).toBeFalsy();
  });

  it('[delItem] Deletes correctly', async () => {
    await testStorage.delItem(keyToGet);
    const [err2, item] = await testStorage.getItem(keyToGet);

    expect(err2).toBe('Nothing found');
    expect(item).toBe(null);
  });
});
