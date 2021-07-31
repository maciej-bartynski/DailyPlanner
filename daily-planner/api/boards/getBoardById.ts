import {boardsStorage} from './boardsStorage';
import {iBoard} from 'lib/models/board';
import {
  eBoardsIssueCode,
  cBoardsIssueMessage,
  cBoardsIssueSeverity,
} from './boardsIssues';

const getBoardById = async (id: string) => {
  const [errorMessage, board] = await boardsStorage.getItem<iBoard>(id);
  const issueType =
    errorMessage && !board
      ? eBoardsIssueCode.InternalStorageError
      : eBoardsIssueCode.StatusOk;

  const message = issueType && cBoardsIssueMessage[issueType];
  const severity = issueType && cBoardsIssueSeverity[issueType];

  return {
    data: board,
    message,
    severity,
  };
};

export default getBoardById;
