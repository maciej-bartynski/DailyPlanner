import {tasksStorage} from './tasksStorage';
import {iTask} from 'lib/models/task';
import {
  eTasksIssueCode,
  cTasksIssueMessage,
  cTasksIssueSeverity,
} from './tasksIssues';

const getTaskById = async (id: string) => {
  const [errorMessage, task] = await tasksStorage.getItem<iTask>(id);
  const issueType =
    errorMessage && !task
      ? eTasksIssueCode.InternalStorageError
      : eTasksIssueCode.StatusOk;

  const message = issueType && cTasksIssueMessage[issueType];
  const severity = issueType && cTasksIssueSeverity[issueType];

  return {
    data: task,
    message,
    severity,
  };
};

export default getTaskById;
