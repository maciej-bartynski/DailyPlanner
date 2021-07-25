import { iTask } from "lib/models/task";

export enum eTasksActions {
    TASK_CREATE = 'TASK_CREATE',
    TASK_DELETE = 'TASK_DELETE',
    TASK_UPDATE = 'TASK_UPDATE',
    TASKS_INIT = 'TASKS_INIT',
}

export type tTaskInitActionCreator = (params:{
    tasks: Record<iTask['id'], iTask>
    message: string,
    severity: string,
}) => {
    type: eTasksActions.TASKS_INIT,
    payload: {
        tasks: Record<iTask['id'], iTask>,
        message: string,
        severity: string,
    }
}
export type tTaskActionCreatorParam = Parameters<tTaskInitActionCreator>[0];
export type tTaskInitAction = ReturnType<tTaskInitActionCreator>;