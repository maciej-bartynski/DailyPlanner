import {tActionBoardUpdate} from 'lib/storageRedux/actions/boards/types';
import {iBoardsState} from './types';
import {Reducer} from 'redux';
import {boardsInitialState} from './initialState';

type tReducerUpdateBoard = Reducer<iBoardsState, tActionBoardUpdate>;

const reducerUpdateBoard: tReducerUpdateBoard = (
  boardsState = boardsInitialState,
  action,
): iBoardsState => {
  const {id, fields, severity, message} = action.payload;
  const {boards: oldBoards, total} = boardsState.data;

  if (!oldBoards) {
    return {...boardsState, loading: false};
  }

  return {
    ...boardsState,
    loading: false,
    severity,
    message,
    data: {
      boards: {
        ...oldBoards,
        [id]: {
          ...oldBoards[id],
          ...fields,
        },
      },
      total,
    },
  };
};

export default reducerUpdateBoard;
