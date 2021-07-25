import { eTasksActions, iTasksState } from 'lib/storageRedux/storageRedux.types';
import { iTask } from 'lib/models/task';
import { Reducer } from 'redux';
import { tasksInitialState } from './initialState';

export type tReducerCreateTaskActionParam={
    type: eTasksActions;
    payload: {
        task: iTask,
        message: string,
        severity: string,
    }
}

type tReducerCreateTask = Reducer<iTasksState, tReducerCreateTaskActionParam>;

const reducerCreateTask: tReducerCreateTask =
    (taskState = tasksInitialState, action): iTasksState => {
        const { payload } = action;
        const { data } = taskState;

        const newTasks = {
            ...data.tasks,
            [payload.task.id]: payload.task,
        }

        const newTasksAmoung = Object.keys(newTasks).length;

        return {
            loading: false,
            severity: payload.severity,
            message: payload.message,
            data: {
                total: newTasksAmoung,
                tasks: newTasks
            },
        };
    };

    export default reducerCreateTask;