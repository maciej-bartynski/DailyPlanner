import * as taskReducers from 'lib/storageRedux/reducers/tasks';
import * as taskActions from 'lib/storageRedux/actions/tasks';
import * as boardActions from 'lib/storageRedux/actions/boards';
import * as boardReducers from 'lib/storageRedux/reducers/boards';
import {
  eTasksReducers,
  iTasksState,
  iBoardsState,
  eBoardsReducers,
} from './storageRedux.types';
import {Reducer} from 'redux';
import {tasksInitialState} from './reducers/tasks/initialState';
import {boardsInitialState} from './reducers/boards/initialState';

type tAnyTaskAction = ReturnType<typeof taskActions[keyof typeof taskActions]>;
type tAnyTaskReducer = (
  state: iTasksState,
  action: tAnyTaskAction,
) => iTasksState;

export const reducerTasks: Reducer<iTasksState, tAnyTaskAction> = (
  state: iTasksState = tasksInitialState,
  action: tAnyTaskAction,
) => {
  const currentReducerName = eTasksReducers[action.type];
  const currentReducer = taskReducers[currentReducerName] as tAnyTaskReducer;
  return typeof currentReducer === 'function'
    ? currentReducer(state, action)
    : state;
};

type tAnyBoardAction = ReturnType<
  typeof boardActions[keyof typeof boardActions]
>;
type tAnyBoardReducer = (
  state: iBoardsState,
  action: tAnyBoardAction,
) => iBoardsState;

export const reducerBoards: Reducer<iBoardsState, tAnyBoardAction> = (
  state: iBoardsState = boardsInitialState,
  action: tAnyBoardAction,
) => {
  const currentReducerName = eBoardsReducers[action.type];
  const currentReducer = boardReducers[currentReducerName] as tAnyBoardReducer;
  return typeof currentReducer === 'function'
    ? currentReducer(state, action)
    : state;
};
