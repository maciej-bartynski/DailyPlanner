import {iBoard} from 'lib/models/board';
import {eApiIssueSeverity} from 'api/types';
import {eBoardsIssueMessage} from 'api/boards/boardsIssues';

export enum eBoardsActions {
  BOARD_CREATE = 'BOARD_CREATE',
  BOARD_DELETE = 'BOARD_DELETE',
  BOARD_UPDATE = 'BOARD_UPDATE',
  BOARDS_INIT = 'BOARDS_INIT',
  BOARDS_LOADING = 'BOARDS_LOADING',
  BOARDS_ISSUE = 'BOARDS_ISSUE',
}

type tBoardIdAlias = iBoard['id'];
type tPartialExistingBoard = Partial<Omit<iBoard, 'id'>>;

/**
 * BOARDS_INIT types
 */
export type tActionCreatorBoardInit = (params: {
  boards: Record<tBoardIdAlias, iBoard>;
  message: eBoardsIssueMessage;
  severity: eApiIssueSeverity;
}) => {
  type: eBoardsActions.BOARDS_INIT;
  payload: {
    boards: Record<tBoardIdAlias, iBoard>;
    message: eBoardsIssueMessage;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamBoardInit =
  Parameters<tActionCreatorBoardInit>[0];
export type tActionBoardInit = ReturnType<tActionCreatorBoardInit>;

/**
 * BOARD_CREATE types
 */

export type tActionCreatorBoardCreate = (params: {
  board: iBoard;
  message: eBoardsIssueMessage;
  severity: eApiIssueSeverity;
}) => {
  type: eBoardsActions.BOARD_CREATE;
  payload: {
    board: iBoard;
    message: string;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamBoardCreate =
  Parameters<tActionCreatorBoardCreate>[0];
export type tActionBoardCreate = ReturnType<tActionCreatorBoardCreate>;

/**
 * BOARD_UPDATE types
 */

export type tActionCreatorBoardUpdate = (params: {
  fields: tPartialExistingBoard;
  message: eBoardsIssueMessage;
  severity: eApiIssueSeverity;
  id: tBoardIdAlias;
}) => {
  type: eBoardsActions.BOARD_UPDATE;
  payload: {
    id: tBoardIdAlias;
    fields: tPartialExistingBoard;
    message: eBoardsIssueMessage;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamBoardUpdate =
  Parameters<tActionCreatorBoardUpdate>[0];
export type tActionBoardUpdate = ReturnType<tActionCreatorBoardUpdate>;

/**
 * BOARD_DELETE types
 */
export type tActionCreatorBoardDelete = (params: {
  id: tBoardIdAlias;
  message: eBoardsIssueMessage;
  severity: eApiIssueSeverity;
}) => {
  type: eBoardsActions.BOARD_DELETE;
  payload: {
    id: tBoardIdAlias;
    message: eBoardsIssueMessage;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamBoardDelete =
  Parameters<tActionCreatorBoardDelete>[0];
export type tActionBoardDelete = ReturnType<tActionCreatorBoardDelete>;

/**
 * BOARDS_LOADING types
 */
export type tActionCreatorBoardsLoading = (params: {loading: boolean}) => {
  type: eBoardsActions.BOARDS_LOADING;
  payload: {
    loading: boolean;
  };
};

export type tActionCreatorParamBoardsLoading =
  Parameters<tActionCreatorBoardsLoading>[0];
export type tActionBoardsLoading = ReturnType<tActionCreatorBoardsLoading>;

/**
 * BOARDS_ISSUE types
 */
export type tActionCreatorBoardsIssue = (params: {
  severity: eApiIssueSeverity;
  message: eBoardsIssueMessage;
}) => {
  type: eBoardsActions.BOARDS_ISSUE;
  payload: {
    severity: eApiIssueSeverity;
    message: eBoardsIssueMessage;
  };
};

export type tActionCreatorParamBoardsIssue =
  Parameters<tActionCreatorBoardsIssue>[0];
export type tActionBoardsIssue = ReturnType<tActionCreatorBoardsIssue>;
