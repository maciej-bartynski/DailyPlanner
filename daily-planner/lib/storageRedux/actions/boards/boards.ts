import {
  eBoardsActions,
  tActionCreatorBoardInit,
  tActionCreatorBoardCreate,
  tActionCreatorBoardUpdate,
  tActionCreatorBoardDelete,
  tActionCreatorBoardsLoading,
  tActionCreatorBoardsIssue,
} from './types';

export const actionCreatorBoardsInit: tActionCreatorBoardInit = ({
  boards,
  severity,
  message,
}) => {
  return {
    type: eBoardsActions.BOARDS_INIT,
    payload: {
      boards,
      severity,
      message,
    },
  };
};

export const actionCreatorBoardCreate: tActionCreatorBoardCreate = ({
  severity,
  message,
  board,
}) => {
  return {
    type: eBoardsActions.BOARD_CREATE,
    payload: {
      severity,
      message,
      board,
    },
  };
};

export const actionCreatorBoardUpdate: tActionCreatorBoardUpdate = ({
  id,
  fields,
  message,
  severity,
}) => {
  return {
    type: eBoardsActions.BOARD_UPDATE,
    payload: {
      id,
      fields,
      message,
      severity,
    },
  };
};

export const actionCreatorBoardDelete: tActionCreatorBoardDelete = ({
  id,
  message,
  severity,
}) => {
  return {
    type: eBoardsActions.BOARD_DELETE,
    payload: {
      id,
      message,
      severity,
    },
  };
};

export const actionCreatorBoardsLoading: tActionCreatorBoardsLoading = ({
  loading,
}) => {
  return {
    type: eBoardsActions.BOARDS_LOADING,
    payload: {
      loading,
    },
  };
};

export const actionCreatorBoardsIssue: tActionCreatorBoardsIssue = ({
  severity,
  message,
}) => {
  return {
    type: eBoardsActions.BOARDS_ISSUE,
    payload: {
      severity,
      message,
    },
  };
};
