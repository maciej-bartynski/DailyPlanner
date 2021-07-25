import {iBoard} from 'lib/models/board';

/**
 * { boards }
 */

export interface iBoardsState {
  boards: {
    [id: string]: iBoard;
  };
  current: iBoard | null;
  total: number;
  active: number;
}

export enum eBoardsActions {
  BOARD_CREATE = 'BOARD_CREATE',
  BOARD_DELETE = 'BOARD_DELETE',
  BOARD_UPDATE = 'BOARD_UPDATE',
  BOARDS_INIT = 'BOARDS_INIT',
}

export enum eBoardsReducers {
  BOARD_CREATE = 'reducerCreateBoard',
  BOARD_UPDATE = 'reducerUpdateBoard',
  BOARD_DELETE = 'reducerDeleteBoard',
  BOARDS_INIT = 'reducerInitBoards',
}
