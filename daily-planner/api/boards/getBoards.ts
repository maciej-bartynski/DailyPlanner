import {boardsStorage} from './boardsStorage';
import {iBoard} from 'lib/models/board';
import {
  cBoardsIssueMessage,
  eBoardsIssueCode,
  cBoardsIssueSeverity,
  eBoardsIssueMessage,
} from './boardsIssues';
import {iEndpointReturnType} from 'api/types';

type tGetBoards = () => Promise<
  iEndpointReturnType<eBoardsIssueMessage, Record<string, iBoard>>
>;

const getBoards: tGetBoards = async () => {
  const [errorMessage, tasks] = await boardsStorage.getAll<iBoard>();

  const issueType = errorMessage
    ? eBoardsIssueCode.InternalStorageError
    : tasks && Object.keys(tasks).length
    ? eBoardsIssueCode.StatusOk
    : eBoardsIssueCode.NoDataFound;

  const message = issueType && cBoardsIssueMessage[issueType];
  const severity = issueType && cBoardsIssueSeverity[issueType];

  return {
    data: tasks,
    message,
    severity,
  };
};

export default getBoards;
