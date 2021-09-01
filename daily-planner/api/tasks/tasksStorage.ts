import Storage from 'lib/storageLocal/storage';
import { iTask } from 'lib/models/task';

export const STORAGE_PREFIX = 'TASKS';
export const tasksStorage = new Storage<iTask>(STORAGE_PREFIX);
