import {eBoardsActions} from 'lib/storageRedux/storageRedux.types';
import {iBoard} from 'lib/models/board';

export const actionCreatorBoardCreate = (board: iBoard) => {
  return {
    type: eBoardsActions.BOARD_CREATE,
    payload: board,
  };
};

export const actionCreatorBoardUpdate = (
  id: string,
  boardFields: Partial<iBoard>,
) => {
  return {
    type: eBoardsActions.BOARD_UPDATE,
    payload: {id, fields: boardFields},
  };
};

export const actionCreatorBoardDelete = (id: string) => {
  return {
    type: eBoardsActions.BOARD_DELETE,
    payload: id,
  };
};
