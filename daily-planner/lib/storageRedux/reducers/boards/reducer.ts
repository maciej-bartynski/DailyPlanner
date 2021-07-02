import {
  eBoardsActions,
  iBoardsState,
} from 'lib/storageRedux/storageRedux.types';
import {iBoard} from 'lib/models/board';
import {Reducer} from 'redux';
import {boardsInitialState} from './initialState';

export const reducerCreateBoard: Reducer<
  iBoardsState,
  {
    type: eBoardsActions;
    payload: iBoard;
  }
> = (
  boardsState: iBoardsState = boardsInitialState,
  action: {
    type: eBoardsActions;
    payload: iBoard;
  },
): iBoardsState => {
  const {payload} = action;
  const {boards, active, total, current} = boardsState;
  return {
    active,
    current,
    total: total + 1,
    boards: {
      ...boards,
      [payload.id]: payload,
    },
  };
};

export const reducerUpdateBoard: Reducer<
  iBoardsState,
  {
    type: eBoardsActions;
    payload: {
      id: string;
      fields: Partial<iBoard>;
    };
  }
> = (boardsState: iBoardsState = boardsInitialState, action) => {
  const {id, fields} = action.payload;
  const {boards, active, total, current} = boardsState;

  return {
    active,
    current,
    total,
    boards: {
      ...boards,
      [id]: {
        ...boards[id],
        ...fields,
      },
    },
  };
};

export const reducerDeleteBoard: Reducer<
  iBoardsState,
  {
    type: eBoardsActions;
    payload: string;
  }
> = (
  boardsState: iBoardsState = boardsInitialState,
  action: {
    type: eBoardsActions;
    payload: string;
  },
): iBoardsState => {
  const {payload} = action;
  const {boards, active, total, current} = boardsState;

  delete boards[payload];

  return {
    active,
    current,
    total: total - 1,
    boards,
  };
};
