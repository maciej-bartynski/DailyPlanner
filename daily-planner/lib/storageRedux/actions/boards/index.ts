import {
  actionCreatorBoardCreate,
  actionCreatorBoardUpdate,
  actionCreatorBoardDelete,
  actionCreatorBoardsInit,
  actionCreatorBoardsLoading,
  actionCreatorBoardsIssue,
} from './boards';
import {eBoardsActions} from 'lib/storageRedux/actions/boards/types';

const cTaskActionCreators = {
  [eBoardsActions.BOARDS_INIT]: actionCreatorBoardsInit,
  [eBoardsActions.BOARD_CREATE]: actionCreatorBoardCreate,
  [eBoardsActions.BOARD_UPDATE]: actionCreatorBoardUpdate,
  [eBoardsActions.BOARD_DELETE]: actionCreatorBoardDelete,
  [eBoardsActions.BOARDS_LOADING]: actionCreatorBoardsLoading,
  [eBoardsActions.BOARDS_ISSUE]: actionCreatorBoardsIssue,
};

export default cTaskActionCreators;
