import {eTasksActions, iTasksState} from 'lib/storageRedux/storageRedux.types';
import {iTask} from 'lib/models/task';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';

export const reducerInitTasks: Reducer<
  iTasksState,
  {
    type: eTasksActions;
    payload: Record<string, iTask>;
  }
> = (taskState = tasksInitialState, action) => {
  return {
    ...taskState,
    total: Object.keys(action.payload).length,
    tasks: action.payload,
  };
};

export const reducerCreateTask: Reducer<
  iTasksState,
  {
    type: eTasksActions;
    payload: iTask;
  }
> = (
  taskState: iTasksState = tasksInitialState,
  action: {
    type: eTasksActions;
    payload: iTask;
  },
): iTasksState => {
  const {payload} = action;
  const {tasks, active, total, current} = taskState;
  return {
    active,
    current,
    total: total + 1,
    tasks: {
      ...tasks,
      [payload.id]: payload,
    },
  };
};

export const reducerUpdateTask: Reducer<
  iTasksState,
  {
    type: eTasksActions;
    payload: {
      id: string;
      fields: Partial<iTask>;
    };
  }
> = (taskState: iTasksState = tasksInitialState, action) => {
  const {id, fields} = action.payload;
  const {tasks, active, total, current} = taskState;

  return {
    active,
    current,
    total,
    tasks: {
      ...tasks,
      [id]: {
        ...tasks[id],
        ...fields,
      },
    },
  };
};

export const reducerDeleteTask: Reducer<
  iTasksState,
  {
    type: eTasksActions;
    payload: string;
  }
> = (
  taskState: iTasksState = tasksInitialState,
  action: {
    type: eTasksActions;
    payload: string;
  },
): iTasksState => {
  const {payload} = action;
  const {tasks, active, total, current} = taskState;

  delete tasks[payload];

  return {
    active,
    current,
    total: total - 1,
    tasks,
  };
};
