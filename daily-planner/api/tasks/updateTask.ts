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

type tUpdateTask = (
  id: string,
  fields: iTask,
) => Promise<iEndpointReturnType<eTasksIssueMessage, iStorageItem<iTask>>>;

const updateTask: tUpdateTask = async (id, fields) => {
  const [errorMessage, item] = await tasksStorage.patchItem(id, fields);

  const issueType = errorMessage
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

export default updateTask;
