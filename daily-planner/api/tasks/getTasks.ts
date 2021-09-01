import {tasksStorage} from './tasksStorage';
import {iTask} from 'lib/models/task';
import {
  cTasksIssueMessage,
  eTasksIssueCode,
  cTasksIssueSeverity,
  eTasksIssueMessage,
} from './tasksIssues';
import {iEndpointReturnType} from 'api/types';
import { iStorageItem } from 'lib/storageLocal/_types';

type tGetTasks = () => Promise<
  iEndpointReturnType<eTasksIssueMessage, Record<string, iStorageItem<iTask>>>
>;

const getTasks: tGetTasks = async () => {
  const [errorMessage, tasks] = await tasksStorage.getAll();

  const issueType = errorMessage
    ? eTasksIssueCode.InternalStorageError
    : tasks && Object.keys(tasks).length
    ? eTasksIssueCode.StatusOk
    : eTasksIssueCode.NoDataFound;

  const message = issueType && cTasksIssueMessage[issueType];
  const severity = issueType && cTasksIssueSeverity[issueType];

  return {
    data: tasks,
    message,
    severity,
  };
};

export default getTasks;
