import {tActionTaskUpdate} from 'lib/storageRedux/actions/tasks/types';
import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';

type tReducerUpdateTask = Reducer<iTasksState, tActionTaskUpdate>;

const reducerUpdateTask: tReducerUpdateTask = (
  tasksState = tasksInitialState,
  action,
): iTasksState => {
  const {id, fields, severity, message} = action.payload;
  const {tasks: oldTasks, total} = tasksState.data;

  if (!oldTasks) {
    return {...tasksState, loading: false};
  }

  return {
    ...tasksState,
    loading: false,
    severity,
    message,
    data: {
      tasks: {
        ...oldTasks,
        [id]: fields,
      },
      total,
    },
  };
};

export default reducerUpdateTask;
