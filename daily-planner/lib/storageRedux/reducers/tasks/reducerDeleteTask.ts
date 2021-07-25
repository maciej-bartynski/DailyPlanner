import {tActionTaskDelete} from 'lib/storageRedux/actions/tasks/types';
import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';

type tReducerDeleteTask = Reducer<iTasksState, tActionTaskDelete>;

const reducerDeleteTask: tReducerDeleteTask = (
  taskState = tasksInitialState,
  action,
): iTasksState => {
  const {message, severity, id} = action.payload;
  const {data} = taskState;
  const {tasks} = data;

  if (!tasks) {
    return {...taskState, loading: false};
  }

  const newTasks = {...tasks};
  delete newTasks[id];
  const newTasksAmount = Object.keys(newTasks).length;

  return {
    message,
    severity,
    loading: false,
    data: {
      total: newTasksAmount,
      tasks: newTasksAmount ? newTasks : null,
    },
  };
};

export default reducerDeleteTask;
