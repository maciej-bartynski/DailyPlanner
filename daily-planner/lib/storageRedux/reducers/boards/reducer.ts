import cBoardsReducers from 'lib/storageRedux/reducers/boards/index';
import cBoardsActions from 'lib/storageRedux/actions/boards';
import {
  eBoardsActions,
  tActionBoardCreate,
  tActionBoardUpdate,
  tActionBoardDelete,
  tActionBoardsLoading,
  tActionBoardsIssue,
} from 'lib/storageRedux/actions/boards/types';
import {iBoardsState} from './types';
import {Reducer} from 'redux';
import {boardsInitialState} from './initialState';
import {tActionBoardInit} from 'lib/storageRedux/actions/boards/types';

type tAnyBoardAction = ReturnType<typeof cBoardsActions[eBoardsActions]>;

export const reducerBoards: Reducer<iBoardsState, tAnyBoardAction> = (
  state = boardsInitialState,
  action: tAnyBoardAction,
) => {
  switch (true) {
    case action.type === eBoardsActions.BOARDS_INIT: {
      const currentReducer = cBoardsReducers[eBoardsActions.BOARDS_INIT];
      const currentAction = action as tActionBoardInit;
      return currentReducer(state, currentAction);
    }
    case action.type === eBoardsActions.BOARD_CREATE: {
      const currentReducer = cBoardsReducers[eBoardsActions.BOARD_CREATE];
      const currentAction = action as tActionBoardCreate;
      return currentReducer(state, currentAction);
    }
    case action.type === eBoardsActions.BOARD_UPDATE: {
      const currentReducer = cBoardsReducers[eBoardsActions.BOARD_UPDATE];
      const currentAction = action as tActionBoardUpdate;
      return currentReducer(state, currentAction);
    }
    case action.type === eBoardsActions.BOARD_DELETE: {
      const currentReducer = cBoardsReducers[eBoardsActions.BOARD_DELETE];
      const currentAction = action as tActionBoardDelete;
      return currentReducer(state, currentAction);
    }
    case action.type === eBoardsActions.BOARDS_LOADING: {
      const currentReducer = cBoardsReducers[eBoardsActions.BOARDS_LOADING];
      const currentAction = action as tActionBoardsLoading;
      return currentReducer(state, currentAction);
    }
    case action.type === eBoardsActions.BOARDS_ISSUE: {
      const currentReducer = cBoardsReducers[eBoardsActions.BOARDS_ISSUE];
      const currentAction = action as tActionBoardsIssue;
      return currentReducer(state, currentAction);
    }
    default: {
      return state;
    }
  }
};
