import { iTasksState } from "lib/storageRedux/storageRedux.types";

export const tasksInitialState : iTasksState = {
    tasks: {},
    current: null,
    total: 0,
    active: 0,
}