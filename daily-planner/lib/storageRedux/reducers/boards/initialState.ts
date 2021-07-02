import {iBoardsState} from 'lib/storageRedux/storageRedux.types';

export const boardsInitialState: iBoardsState = {
  boards: {},
  current: null,
  total: 0,
  active: 0,
};
