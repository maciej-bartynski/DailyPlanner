import {iTask} from 'lib/models/task';

export interface iTasksState {
  data: {
    tasks: Record<iTask['id'], iTask> | null,
    total: number
  };
  message: string,
  severity: string,
  loading: boolean,
}