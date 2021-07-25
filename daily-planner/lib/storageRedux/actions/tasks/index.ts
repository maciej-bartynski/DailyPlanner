import {
  actionCreatorTaskCreate,
  actionCreatorTaskUpdate,
  actionCreatorTaskDelete,
  actionCreatorTasksInit,
  actionCreatorTasksLoading,
  actionCreatorTasksIssue,
} from './tasks';
import {eTasksActions} from 'lib/storageRedux/actions/tasks/types';

const cTaskActionCreators = {
  [eTasksActions.TASKS_INIT]: actionCreatorTasksInit,
  [eTasksActions.TASK_CREATE]: actionCreatorTaskCreate,
  [eTasksActions.TASK_UPDATE]: actionCreatorTaskUpdate,
  [eTasksActions.TASK_DELETE]: actionCreatorTaskDelete,
  [eTasksActions.TASKS_LOADING]: actionCreatorTasksLoading,
  [eTasksActions.TASKS_ISSUE]: actionCreatorTasksIssue,
};

export default cTaskActionCreators;
