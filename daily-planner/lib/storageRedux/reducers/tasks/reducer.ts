import cTaskReducers from 'lib/storageRedux/reducers/tasks/index';
import cTaskActions from 'lib/storageRedux/actions/tasks';
import { iTasksState, eTasksActions } from '../../storageRedux.types';
import { Reducer } from 'redux';
import { tasksInitialState } from './initialState';
import { tTaskInitAction } from 'lib/storageRedux/actions/tasks/types';

type tAnyTaskAction = ReturnType<typeof cTaskActions[eTasksActions]>;

export const reducerTasks: Reducer<iTasksState, tAnyTaskAction> = (
    state = tasksInitialState,
    action: tAnyTaskAction,
) => {

    switch (true) {
        case action.type === eTasksActions.TASKS_INIT: {
            const currentReducer = cTaskReducers[eTasksActions.TASKS_INIT];
            const currentAction = action as tTaskInitAction;
            return currentReducer(state, currentAction)
        }
        case action.type === eTasksActions.TASK_CREATE: {
            const currentReducer = cTaskReducers[eTasksActions.TASK_CREATE];
            const currentAction = action as tTaskInitAction;
            return currentReducer(state, currentAction)
        }
        case action.type === eTasksActions.TASK_UPDATE: {
            const currentReducer = cTaskReducers[eTasksActions.TASK_UPDATE];
            const currentAction = action as tTaskInitAction;
            return currentReducer(state, currentAction)
        }
        case action.type === eTasksActions.TASK_DELETE: {
            const currentReducer = cTaskReducers[eTasksActions.TASK_DELETE];
            const currentAction = action as tTaskInitAction;
            return currentReducer(state, currentAction)
        }
        default: {
            return state;
        }
    }
};
