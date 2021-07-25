import Storage from 'lib/storageLocal/storage';

export const STORAGE_PREFIX = 'TASKS';
export const tasksStorage = new Storage(STORAGE_PREFIX);
