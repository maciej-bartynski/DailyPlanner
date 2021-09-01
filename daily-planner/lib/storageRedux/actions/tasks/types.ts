import { iTask } from 'lib/models/task';
import { eApiIssueSeverity } from 'api/types';
import { eTasksIssueMessage } from 'api/tasks/tasksIssues';
import { iStorageItem } from 'lib/storageLocal/_types';

export enum eTasksActions {
  TASK_CREATE = 'TASK_CREATE',
  TASK_DELETE = 'TASK_DELETE',
  TASK_UPDATE = 'TASK_UPDATE',
  TASKS_INIT = 'TASKS_INIT',
  TASKS_LOADING = 'TASKS_LOADING',
  TASKS_ISSUE = 'TASKS_ISSUE',
}

type tTaskIdAlias = iStorageItem<iTask>['_id'];
type tPartialExistingTask = Partial<Omit<iStorageItem<iTask>, '_id'>>;

/**
 * TASK_INIT types
 */
export type tActionCreatorTaskInit = (params: {
  tasks: Record<tTaskIdAlias, iStorageItem<iTask>>;
  message: eTasksIssueMessage;
  severity: eApiIssueSeverity;
}) => {
  type: eTasksActions.TASKS_INIT;
  payload: {
    tasks: Record<tTaskIdAlias, iStorageItem<iTask>>;
    message: eTasksIssueMessage;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamTaskInit = Parameters<tActionCreatorTaskInit>[0];
export type tActionTaskInit = ReturnType<tActionCreatorTaskInit>;

/**
 * TASK_CREATE types
 */

export type tActionCreatorTaskCreate = (params: {
  task: iStorageItem<iTask>;
  message: eTasksIssueMessage;
  severity: eApiIssueSeverity;
}) => {
  type: eTasksActions.TASK_CREATE;
  payload: {
    task: iStorageItem<iTask>;
    message: string;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamTaskCreate =
  Parameters<tActionCreatorTaskCreate>[0];
export type tActionTaskCreate = ReturnType<tActionCreatorTaskCreate>;

/**
 * TASK_UPDATE types
 */

export type tActionCreatorTaskUpdate = (params: {
  fields: iStorageItem<iTask>;
  message: eTasksIssueMessage;
  severity: eApiIssueSeverity;
  id: tTaskIdAlias;
}) => {
  type: eTasksActions.TASK_UPDATE;
  payload: {
    id: tTaskIdAlias;
    fields: iStorageItem<iTask>;
    message: eTasksIssueMessage;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamTaskUpdate =
  Parameters<tActionCreatorTaskUpdate>[0];
export type tActionTaskUpdate = ReturnType<tActionCreatorTaskUpdate>;

/**
 * TASK_DELETE types
 */
export type tActionCreatorTaskDelete = (params: {
  id: tTaskIdAlias;
  message: eTasksIssueMessage;
  severity: eApiIssueSeverity;
}) => {
  type: eTasksActions.TASK_DELETE;
  payload: {
    id: tTaskIdAlias;
    message: eTasksIssueMessage;
    severity: eApiIssueSeverity;
  };
};
export type tActionCreatorParamTaskDelete =
  Parameters<tActionCreatorTaskDelete>[0];
export type tActionTaskDelete = ReturnType<tActionCreatorTaskDelete>;

/**
 * TASKS_LOADING types
 */
export type tActionCreatorTasksLoading = (params: { loading: boolean }) => {
  type: eTasksActions.TASKS_LOADING;
  payload: {
    loading: boolean;
  };
};

export type tActionCreatorParamTasksLoading =
  Parameters<tActionCreatorTasksLoading>[0];
export type tActionTasksLoading = ReturnType<tActionCreatorTasksLoading>;

/**
 * TASKS_ISSUE types
 */
export type tActionCreatorTasksIssue = (params: {
  severity: eApiIssueSeverity;
  message: eTasksIssueMessage;
}) => {
  type: eTasksActions.TASKS_ISSUE;
  payload: {
    severity: eApiIssueSeverity;
    message: eTasksIssueMessage;
  };
};

export type tActionCreatorParamTasksIssue =
  Parameters<tActionCreatorTasksIssue>[0];
export type tActionTasksIssue = ReturnType<tActionCreatorTasksIssue>;
