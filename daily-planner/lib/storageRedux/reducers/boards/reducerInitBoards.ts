import {iBoardsState} from './types';
import {Reducer} from 'redux';
import {tActionBoardInit} from 'lib/storageRedux/actions/boards/types';
import {boardsInitialState} from './initialState';

type tReducerInitBoards = Reducer<iBoardsState, tActionBoardInit>;

const reducerInitBoards: tReducerInitBoards = (
  boardsState = boardsInitialState,
  action,
): iBoardsState => {
  const tasksAmount = Object.keys(action.payload.boards).length;
  return {
    ...boardsState,
    loading: false,
    wasDataFetchAttempt: true,
    message: action.payload.message,
    severity: action.payload.severity,
    data: {
      total: tasksAmount,
      boards: tasksAmount ? action.payload.boards : null,
    },
  };
};

export default reducerInitBoards;
