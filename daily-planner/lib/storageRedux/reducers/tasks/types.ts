import {iTask} from 'lib/models/task';
import {eApiIssueSeverity} from 'api/types';
import { iStorageItem } from 'lib/storageLocal/_types';

export interface iTasksState {
  data: {
    tasks: Record<string, iStorageItem<iTask>> | null;
    total: number;
  };
  message: string;
  severity: eApiIssueSeverity;
  loading: boolean;
}
