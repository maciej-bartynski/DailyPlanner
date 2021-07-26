import {tActionTaskCreate} from 'lib/storageRedux/actions/tasks/types';
import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';

type tReducerCreateTask = Reducer<iTasksState, tActionTaskCreate>;

const reducerCreateTask: tReducerCreateTask = (
  tasksState = tasksInitialState,
  action,
): iTasksState => {
  const {payload} = action;
  const {data} = tasksState;

  const newTasks = {
    ...data.tasks,
    [payload.task.id]: payload.task,
  };

  const newTasksAmoung = Object.keys(newTasks).length;

  return {
    ...tasksState,
    loading: false,
    severity: payload.severity,
    message: payload.message,
    data: {
      total: newTasksAmoung,
      tasks: newTasks,
    },
    wasDataFetchAttempt: true,
  };
};

export default reducerCreateTask;
