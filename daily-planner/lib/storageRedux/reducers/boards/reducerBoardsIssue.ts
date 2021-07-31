import {iBoardsState} from './types';
import {Reducer} from 'redux';
import {boardsInitialState} from './initialState';
import {tActionBoardsIssue} from 'lib/storageRedux/actions/boards/types';

type tReducerBoardsIssue = Reducer<iBoardsState, tActionBoardsIssue>;

const reducerBoardsIssue: tReducerBoardsIssue = (
  boardsState = boardsInitialState,
  action,
): iBoardsState => {
  return {
    ...boardsState,
    severity: action.payload.severity,
    message: action.payload.message,
    loading: false,
  };
};

export default reducerBoardsIssue;
