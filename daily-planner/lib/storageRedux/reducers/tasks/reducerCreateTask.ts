import {tActionTaskCreate} from 'lib/storageRedux/actions/tasks/types';
import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';

type tReducerCreateTask = Reducer<iTasksState, tActionTaskCreate>;

const reducerCreateTask: tReducerCreateTask = (
  taskState = tasksInitialState,
  action,
): iTasksState => {
  const {payload} = action;
  const {data} = taskState;

  const newTasks = {
    ...data.tasks,
    [payload.task.id]: payload.task,
  };

  const newTasksAmoung = Object.keys(newTasks).length;

  return {
    loading: false,
    severity: payload.severity,
    message: payload.message,
    data: {
      total: newTasksAmoung,
      tasks: newTasks,
    },
  };
};

export default reducerCreateTask;
