import {tActionBoardCreate} from 'lib/storageRedux/actions/boards/types';
import {iBoardsState} from './types';
import {Reducer} from 'redux';
import {boardsInitialState} from './initialState';

type tReducerCreateBoard = Reducer<iBoardsState, tActionBoardCreate>;

const reducerCreateBoard: tReducerCreateBoard = (
  boardsState = boardsInitialState,
  action,
): iBoardsState => {
  const {payload} = action;
  const {data} = boardsState;

  const newBoards = {
    ...data.boards,
    [payload.board.id]: payload.board,
  };

  const newBoardsAmount = Object.keys(newBoards).length;

  return {
    ...boardsState,
    loading: false,
    severity: payload.severity,
    message: payload.message,
    data: {
      total: newBoardsAmount,
      boards: newBoards,
    },
    wasDataFetchAttempt: true,
  };
};

export default reducerCreateBoard;
