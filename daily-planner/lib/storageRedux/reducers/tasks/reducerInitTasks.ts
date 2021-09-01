import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tActionTaskInit} from 'lib/storageRedux/actions/tasks/types';
import {tasksInitialState} from './initialState';

type tReducerInitTasks = Reducer<iTasksState, tActionTaskInit>;

const reducerInitTasks: tReducerInitTasks = (
  tasksState = tasksInitialState,
  action,
): iTasksState => {
  const tasksAmount = Object.keys(action.payload.tasks).length;
  return {
    ...tasksState,
    loading: false,
    message: action.payload.message,
    severity: action.payload.severity,
    data: {
      total: tasksAmount,
      tasks: tasksAmount ? action.payload.tasks : null,
    },
  };
};

export default reducerInitTasks;
