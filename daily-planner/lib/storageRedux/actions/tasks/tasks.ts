import { eTasksActions } from "lib/storageRedux/storageRedux.types";
import { iTask } from "lib/models/task";

export const actionCreatorTaskCreate = (task: iTask) => {
    return {
        type: eTasksActions.TASK_CREATE,
        payload: task,
    }
}

export const actionCreatorTaskUpdate = (id: string, taskFields: Partial<iTask>) => {
    return {
        type: eTasksActions.TASK_UPDATE,
        payload: { id, fields: taskFields },
    }
}

export const actionCreatorTaskDelete = (id: string) => {
    return {
        type: eTasksActions.TASK_DELETE,
        payload: id,
    }
}