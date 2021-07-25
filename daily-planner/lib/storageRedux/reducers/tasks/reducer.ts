import cTaskReducers from 'lib/storageRedux/reducers/tasks/index';
import cTaskActions from 'lib/storageRedux/actions/tasks';
import {
  eTasksActions,
  tActionTaskCreate,
  tActionTaskUpdate,
  tActionTaskDelete,
  tActionTasksLoading,
  tActionTasksIssue,
} from 'lib/storageRedux/actions/tasks/types';
import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';
import {tActionTaskInit} from 'lib/storageRedux/actions/tasks/types';

type tAnyTaskAction = ReturnType<typeof cTaskActions[eTasksActions]>;

export const reducerTasks: Reducer<iTasksState, tAnyTaskAction> = (
  state = tasksInitialState,
  action: tAnyTaskAction,
) => {
  switch (true) {
    case action.type === eTasksActions.TASKS_INIT: {
      const currentReducer = cTaskReducers[eTasksActions.TASKS_INIT];
      const currentAction = action as tActionTaskInit;
      return currentReducer(state, currentAction);
    }
    case action.type === eTasksActions.TASK_CREATE: {
      const currentReducer = cTaskReducers[eTasksActions.TASK_CREATE];
      const currentAction = action as tActionTaskCreate;
      return currentReducer(state, currentAction);
    }
    case action.type === eTasksActions.TASK_UPDATE: {
      const currentReducer = cTaskReducers[eTasksActions.TASK_UPDATE];
      const currentAction = action as tActionTaskUpdate;
      return currentReducer(state, currentAction);
    }
    case action.type === eTasksActions.TASK_DELETE: {
      const currentReducer = cTaskReducers[eTasksActions.TASK_DELETE];
      const currentAction = action as tActionTaskDelete;
      return currentReducer(state, currentAction);
    }
    case action.type === eTasksActions.TASKS_LOADING: {
      const currentReducer = cTaskReducers[eTasksActions.TASKS_LOADING];
      const currentAction = action as tActionTasksLoading;
      return currentReducer(state, currentAction);
    }
    case action.type === eTasksActions.TASKS_ISSUE: {
      const currentReducer = cTaskReducers[eTasksActions.TASKS_ISSUE];
      const currentAction = action as tActionTasksIssue;
      return currentReducer(state, currentAction);
    }
    default: {
      return state;
    }
  }
};
