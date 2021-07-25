import {tasksStorage} from './tasksStorage';
import {
  cTasksIssueMessage,
  eTasksIssueCode,
  cTasksIssueSeverity,
  eTasksIssueMessage,
} from './tasksIssues';
import {iEndpointReturnType} from 'api/types';
import {iTask} from 'lib/models/task';

type tCreateTask = (
  fields: Omit<iTask, 'id'>,
) => Promise<iEndpointReturnType<eTasksIssueMessage, string | null>>;

const createTask: tCreateTask = async (fields: Omit<iTask, 'id'>) => {
  const [errorMessage, key] = await tasksStorage.setItem(fields);

  const issueType =
    errorMessage && key
      ? eTasksIssueCode.InternalStorageError
      : eTasksIssueCode.StatusOk;

  const message = issueType && cTasksIssueMessage[issueType];
  const severity = issueType && cTasksIssueSeverity[issueType];

  return {
    data: key,
    message,
    severity,
  };
};

export default createTask;
