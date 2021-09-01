import {iTasksState} from './types';
import {eApiIssueSeverity} from 'api/types';
import {eTasksIssueMessage} from 'api/tasks/tasksIssues';

export const tasksInitialState: iTasksState = {
  data: {
    tasks: null,
    total: 0,
  },
  message: '' as eTasksIssueMessage,
  severity: '' as eApiIssueSeverity,
  loading: false,
};
