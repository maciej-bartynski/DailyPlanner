import {iTasksState} from './types';
import {Reducer} from 'redux';
import {tasksInitialState} from './initialState';
import {tActionTasksLoading} from 'lib/storageRedux/actions/tasks/types';

type tReducerTasksLoading = Reducer<iTasksState, tActionTasksLoading>;

const reducerTasksLoading: tReducerTasksLoading = (
  tasksState = tasksInitialState,
  action,
): iTasksState => {
  return {
    ...tasksState,
    loading: action.payload.loading,
  };
};

export default reducerTasksLoading;
