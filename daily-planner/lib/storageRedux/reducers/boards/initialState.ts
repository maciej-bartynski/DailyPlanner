import {iBoardsState} from './types';
import {eApiIssueSeverity} from 'api/types';
import {eBoardsIssueMessage} from 'api/boards/boardsIssues';

export const boardsInitialState: iBoardsState = {
  data: {
    boards: null,
    total: 0,
  },
  message: '' as eBoardsIssueMessage,
  severity: '' as eApiIssueSeverity,
  loading: false,
  wasDataFetchAttempt: false,
};
