export interface iTable<ItemType> {
  prefix: string;
  getItem: (id: string) => Promise<[string, iStorageItem<ItemType> | null]>;
  setItem: (item: ItemType) => Promise<[string, iStorageItem<ItemType> | null]>;
  delItem: (key: string) => void;
  patchItem: (key: string, fields: Partial<ItemType>) => Promise<[string, iStorageItem<ItemType> | null]>;
}

export interface iStorageItem<Item> {
  _id: string,
  _createdAt: number,
  _updatedAt: number,
  item: Item
}
