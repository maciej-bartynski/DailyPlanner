import {tActionBoardDelete} from 'lib/storageRedux/actions/boards/types';
import {iBoardsState} from './types';
import {Reducer} from 'redux';
import {boardsInitialState} from './initialState';

type tReducerDeleteBoard = Reducer<iBoardsState, tActionBoardDelete>;

const reducerDeleteBoard: tReducerDeleteBoard = (
  tasksState = boardsInitialState,
  action,
): iBoardsState => {
  const {message, severity, id} = action.payload;
  const {data} = tasksState;
  const {boards} = data;

  if (!boards) {
    return {...tasksState, loading: false};
  }

  const newBoards = {...boards};
  delete newBoards[id];
  const newBoardsAmount = Object.keys(newBoards).length;

  return {
    ...tasksState,
    message,
    severity,
    loading: false,
    data: {
      total: newBoardsAmount,
      boards: newBoardsAmount ? newBoards : null,
    },
    wasDataFetchAttempt: true,
  };
};

export default reducerDeleteBoard;
