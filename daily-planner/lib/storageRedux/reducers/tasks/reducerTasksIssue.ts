import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';
import {tActionTasksIssue} from 'lib/storageRedux/actions/tasks/types';

type tReducerTasksIssue = Reducer<iTasksState, tActionTasksIssue>;

const reducerTasksIssue: tReducerTasksIssue = (
  tasksState = tasksInitialState,
  action,
): iTasksState => {
  return {
    ...tasksState,
    severity: action.payload.severity,
    message: action.payload.message,
    loading: false,
  };
};

export default reducerTasksIssue;
