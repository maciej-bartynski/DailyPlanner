import {eApiIssueSeverity} from 'api/types';

export enum eBoardsIssueCode {
  NoDataFound = 'NoDataFound',
  InternalStorageError = 'InternalStorageError',
  StatusOk = 'StatusOk',
}

export enum eBoardsIssueMessage {
  NoDataFound = 'No tasks to show. Create some, You lazyling!',
  InternalStorageError = "I couldn't get into Your phone memory... Something went wrong :C",
  StatusOk = '',
}

export const cBoardsIssueSeverity = {
  [eBoardsIssueCode.NoDataFound]: eApiIssueSeverity.Info,
  [eBoardsIssueCode.InternalStorageError]: eApiIssueSeverity.Error,
  [eBoardsIssueCode.StatusOk]: eApiIssueSeverity.Success,
};

export const cBoardsIssueMessage = {
  [eBoardsIssueCode.NoDataFound]: eBoardsIssueMessage.NoDataFound,
  [eBoardsIssueCode.InternalStorageError]:
    eBoardsIssueMessage.InternalStorageError,
  [eBoardsIssueCode.StatusOk]: eBoardsIssueMessage.StatusOk,
};
