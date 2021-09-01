import {tasksStorage} from './tasksStorage';
import {
  cTasksIssueMessage,
  eTasksIssueCode,
  cTasksIssueSeverity,
  eTasksIssueMessage,
} from './tasksIssues';
import {iEndpointReturnType} from 'api/types';
import {iTask} from 'lib/models/task';
import { iStorageItem } from 'lib/storageLocal/_types';

type tCreateTask = (
  fields: iTask,
) => Promise<iEndpointReturnType<eTasksIssueMessage, iStorageItem<iTask>>>;

const createTask: tCreateTask = async (fields: iTask) => {
  const [errorMessage, item] = await tasksStorage.setItem(fields);

  const issueType =
    errorMessage || !item
      ? eTasksIssueCode.InternalStorageError
      : eTasksIssueCode.StatusOk;

  const message = issueType && cTasksIssueMessage[issueType];
  const severity = issueType && cTasksIssueSeverity[issueType];

  return {
    data: item,
    message,
    severity,
  };
};

export default createTask;
