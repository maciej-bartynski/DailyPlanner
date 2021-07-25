import {tActionTaskUpdate} from 'lib/storageRedux/actions/tasks/types';
import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';

type tReducerUpdateTask = Reducer<iTasksState, tActionTaskUpdate>;

const reducerUpdateTask: tReducerUpdateTask = (
  taskState = tasksInitialState,
  action,
): iTasksState => {
  const {id, fields, severity, message} = action.payload;
  const {tasks: oldTasks, total} = taskState.data;

  if (!oldTasks) {
    return {...taskState, loading: false};
  }

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
      total,
    },
  };
};

export default reducerUpdateTask;
