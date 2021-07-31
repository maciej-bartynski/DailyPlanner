import {boardsStorage} from './boardsStorage';
import {
  cBoardsIssueMessage,
  eBoardsIssueCode,
  cBoardsIssueSeverity,
  eBoardsIssueMessage,
} from './boardsIssues';
import {iEndpointReturnType} from 'api/types';
import {iBoard} from 'lib/models/board';

type tCreateBoard = (
  fields: Omit<iBoard, 'id'>,
) => Promise<iEndpointReturnType<eBoardsIssueMessage, string | null>>;

const createTask: tCreateBoard = async (fields: Omit<iBoard, 'id'>) => {
  const [errorMessage, key] = await boardsStorage.setItem(fields);

  const issueType =
    errorMessage || !key
      ? eBoardsIssueCode.InternalStorageError
      : eBoardsIssueCode.StatusOk;

  const message = issueType && cBoardsIssueMessage[issueType];
  const severity = issueType && cBoardsIssueSeverity[issueType];

  return {
    data: key,
    message,
    severity,
  };
};

export default createTask;
