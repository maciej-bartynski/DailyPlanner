import {iTask} from 'lib/models/task';
import {eApiIssueSeverity} from 'api/types';

export interface iTasksState {
  data: {
    tasks: Record<iTask['id'], iTask> | null;
    total: number;
  };
  message: string;
  severity: eApiIssueSeverity;
  loading: boolean;
}
