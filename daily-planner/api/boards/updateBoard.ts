import {boardsStorage} from './boardsStorage';
import {iBoard} from 'lib/models/board';
import {
  cBoardsIssueMessage,
  eBoardsIssueCode,
  cBoardsIssueSeverity,
  eBoardsIssueMessage,
} from './boardsIssues';
import {iEndpointReturnType} from 'api/types';

type tUpdateBoard = (
  id: string,
  fields: Omit<iBoard, 'id'>,
) => Promise<iEndpointReturnType<eBoardsIssueMessage, null>>;

const udpateBoard: tUpdateBoard = async (id, fields) => {
  const [errorMessage] = await boardsStorage.patchItem(id, fields);

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

export default udpateBoard;
