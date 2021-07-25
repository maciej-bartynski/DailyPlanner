import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tActionTaskInit} from 'lib/storageRedux/actions/tasks/types';

type tReducerInitTasks = Reducer<iTasksState, tActionTaskInit>;

const reducerInitTasks: tReducerInitTasks = (_, action): iTasksState => {
  const tasksAmount = Object.keys(action.payload.tasks).length;
  return {
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
