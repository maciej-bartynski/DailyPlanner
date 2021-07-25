import * as boardActions from 'lib/storageRedux/actions/boards';
import * as boardReducers from 'lib/storageRedux/reducers/boards';
import {iBoardsState, eBoardsReducers} from './storageRedux.types';
import {Reducer} from 'redux';
import {boardsInitialState} from './reducers/boards/initialState';

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
