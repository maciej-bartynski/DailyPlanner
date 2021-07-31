import {iBoard} from 'lib/models/board';
import {eApiIssueSeverity} from 'api/types';

export interface iBoardsState {
  data: {
    boards: Record<iBoard['id'], iBoard> | null;
    total: number;
  };
  message: string;
  severity: eApiIssueSeverity;
  loading: boolean;
  wasDataFetchAttempt: boolean;
}
