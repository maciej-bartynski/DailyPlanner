import {iTasksState} from 'lib/storageRedux/storageRedux.types';

export const tasksInitialState: iTasksState = {
  data: {
    tasks: null,
    total: 0,
  },
  message: "",
  severity: "",
  loading: false,
};
