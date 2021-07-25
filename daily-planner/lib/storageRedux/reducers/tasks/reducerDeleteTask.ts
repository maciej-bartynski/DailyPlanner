import { eTasksActions, iTasksState } from 'lib/storageRedux/storageRedux.types';
import { iTask } from 'lib/models/task';
import { Reducer } from 'redux';
import { tasksInitialState } from './initialState';

type tReducerDeleteTask = Reducer<
  iTasksState,
  {
    type: eTasksActions;
    payload: {
      id: string,
      message: string,
      severity: string,
    };
  }>;

const reducerDeleteTask: tReducerDeleteTask =
  (taskState = tasksInitialState, action): iTasksState => {
    const { message, severity, id } = action.payload;
    const { data } = taskState;
    const { tasks } = data;

    if (!tasks) return { ...taskState, loading: false }

    const newTasks = { ...tasks };
    delete newTasks[id];
    const newTasksAmount = Object.keys(newTasks).length;

    return {
      message,
      severity,
      loading: false,
      data: {
        total: newTasksAmount,
        tasks: newTasks
      }
    };
  };

export default reducerDeleteTask;
