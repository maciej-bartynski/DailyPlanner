import {iBoardsState} from './types';
import {Reducer} from 'redux';
import {boardsInitialState} from './initialState';
import {tActionBoardsLoading} from 'lib/storageRedux/actions/boards/types';

type tReducerBoardsLoading = Reducer<iBoardsState, tActionBoardsLoading>;

const reducerBoardsLoading: tReducerBoardsLoading = (
  boardsState = boardsInitialState,
  action,
): iBoardsState => {
  return {
    ...boardsState,
    loading: action.payload.loading,
  };
};

export default reducerBoardsLoading;
