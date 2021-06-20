import { iTask } from "lib/models/task";

/**
 * { tasks }
 */
export enum eTasksActions {
    TASK_CREATE = "TASK_CREATE",
    TASK_DELETE = "TASK_DELETE",
    TASK_UPDATE = "TASK_UPDATE",
}

export interface iTasksState {
    tasks : {
        [id: string]: iTask
    },
    current: iTask | null,
    total: number,
    active: number,
}

export enum eTasksReducers {
    TASK_CREATE = "reducerCreateTask",
    TASK_UPDATE = "reducerUpdateTask",
    TASK_DELETE = "reducerDeleteTask",
}
