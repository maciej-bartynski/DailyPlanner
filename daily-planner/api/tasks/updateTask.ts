import {tasksStorage} from './tasksStorage';
import {iTask} from 'lib/models/task';
import {
  cTasksIssueMessage,
  eTasksIssueCode,
  cTasksIssueSeverity,
  eTasksIssueMessage,
} from './tasksIssues';
import {iEndpointReturnType} from 'api/types';

type tUpdateTask = (
  id: string,
  fields: Omit<iTask, 'id'>,
) => Promise<iEndpointReturnType<eTasksIssueMessage, null>>;

const updateTask: tUpdateTask = async (id, fields) => {
  const [errorMessage] = await tasksStorage.patchItem(id, fields);

  const issueType = errorMessage
    ? eTasksIssueCode.InternalStorageError
    : eTasksIssueCode.StatusOk;

  const message = issueType && cTasksIssueMessage[issueType];
  const severity = issueType && cTasksIssueSeverity[issueType];

  return {
    data: null,
    message,
    severity,
  };
};

export default updateTask;
