import { eTasksActions, iTasksState } from 'lib/storageRedux/storageRedux.types';
import { iTask } from 'lib/models/task';
import { Reducer } from 'redux';
import { tasksInitialState } from './initialState';
import { tTaskInitAction } from 'lib/storageRedux/actions/tasks/types';

type tReducerInitTasks = Reducer<iTasksState, tTaskInitAction>;

const reducerInitTasks: tReducerInitTasks =
    (tasksState = tasksInitialState, action): iTasksState => {
        return {
            loading: false,
            message: action.payload.message,
            severity: action.payload.severity,
            data: {
                total: Object.keys(action.payload.tasks).length,
                tasks: action.payload.tasks,
            }
        };
    };

export default reducerInitTasks;