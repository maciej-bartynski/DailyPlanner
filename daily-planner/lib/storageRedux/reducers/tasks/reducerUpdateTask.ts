import { eTasksActions, iTasksState } from 'lib/storageRedux/storageRedux.types';
import { iTask } from 'lib/models/task';
import { Reducer } from 'redux';
import { tasksInitialState } from './initialState';

export type tReducerUpdateTasksActionParam = {
    type: eTasksActions;
    payload: {
        id: string;
        fields: Partial<iTask>;
        severity: string;
        message: string;
    }
}

type tReducerUpdateTask = Reducer<
    iTasksState,
    tReducerUpdateTasksActionParam
>

const reducerUpdateTask: tReducerUpdateTask =
    (taskState = tasksInitialState, action): iTasksState => {
        const { id, fields, severity, message } = action.payload;
        const { tasks: oldTasks, total } = taskState.data;

        if (!oldTasks) return { ...taskState, loading: false };

        return {
            loading: false,
            severity,
            message,
            data: {
                tasks: {
                    ...oldTasks,
                    [id]: {
                        ...oldTasks[id],
                        ...fields,
                    },
                },
                total
            }
        };
    };

export default reducerUpdateTask;
