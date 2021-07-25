import { iTask } from "lib/models/task";
import { eTasksIssueMessage } from "api/tasks/tasksIssues";
import { eApiIssueSeverity } from "api/types";

export enum eUseTasksActionName {
  Loading = 'LOADING',
  Data = 'DATA'
}

export interface eUseTasksState {
  loading: boolean,
  message?: eTasksIssueMessage,
  severity?: eApiIssueSeverity,
  data: {
    tasks: Record<string, iTask> | null,
    total: number
  }
}

export interface eUseTasksAction {
  type: eUseTasksActionName,
  message?: eUseTasksState['message'],
  severity?: eUseTasksState['severity'],
  data?: Partial<eUseTasksState['data']>
}

export const tasksInitialState: eUseTasksState = {
  loading: false,
  message: undefined,
  data: {
    tasks: null,
    total: 0,
  }
};

export const tasksReducer = (
  state: eUseTasksState = tasksInitialState,
  action: eUseTasksAction
): eUseTasksState => {
  switch (true) {
    case action.type === eUseTasksActionName.Loading: {
      return {
        ...state,
        message: undefined,
        severity: undefined,
        loading: true,
      };
    }
    case action.type === eUseTasksActionName.Data: {
      return {
        message: action.message,
        severity: action.severity,
        loading: false,
        data: {
          total: action.data?.total || state.data.total,
          tasks: action.data?.tasks || state.data.tasks
        } 
      };
    }
    default: {
      return state;
    }
  }
};
