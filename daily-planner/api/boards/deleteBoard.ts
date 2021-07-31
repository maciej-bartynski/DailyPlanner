import {boardsStorage} from './boardsStorage';
import {
  cBoardsIssueMessage,
  eBoardsIssueCode,
  cBoardsIssueSeverity,
  eBoardsIssueMessage,
} from './boardsIssues';
import {iEndpointReturnType} from 'api/types';

type tDeleteBoard = (
  id: string,
) => Promise<iEndpointReturnType<eBoardsIssueMessage, null>>;

const deleteBoard: tDeleteBoard = async id => {
  const [errorMessage] = await boardsStorage.delItem(id);

  const issueType = errorMessage
    ? eBoardsIssueCode.InternalStorageError
    : eBoardsIssueCode.StatusOk;

  const message = issueType && cBoardsIssueMessage[issueType];
  const severity = issueType && cBoardsIssueSeverity[issueType];

  return {
    data: null,
    message,
    severity,
  };
};

export default deleteBoard;
