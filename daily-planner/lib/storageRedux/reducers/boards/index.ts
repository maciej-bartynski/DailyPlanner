import {eBoardsActions} from 'lib/storageRedux/actions/boards/types';
import reducerInitBoards from './reducerInitBoards';
import reducerDeleteBoard from './reducerDeleteBoard';
import reducerCreateBoard from './reducerCreateBoard';
import reducerUpdateBoard from './reducerUpdateBoard';
import reducerBoardsLoading from './reducerBoardsLoading';
import reducerBoardsIssue from './reducerBoardsIssue';

const cBoardsReducers = {
  [eBoardsActions.BOARDS_INIT]: reducerInitBoards,
  [eBoardsActions.BOARD_CREATE]: reducerCreateBoard,
  [eBoardsActions.BOARD_UPDATE]: reducerUpdateBoard,
  [eBoardsActions.BOARD_DELETE]: reducerDeleteBoard,
  [eBoardsActions.BOARDS_ISSUE]: reducerBoardsIssue,
  [eBoardsActions.BOARDS_LOADING]: reducerBoardsLoading,
};

export default cBoardsReducers;
