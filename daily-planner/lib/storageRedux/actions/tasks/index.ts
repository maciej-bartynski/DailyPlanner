import {
  actionCreatorTaskCreate,
  actionCreatorTaskUpdate,
  actionCreatorTaskDelete,
  actionCreatorTasksInit,
} from './tasks';
import { eTasksActions } from 'lib/storageRedux/storageRedux.types';

const cTaskActionCreators = {
  [eTasksActions.TASKS_INIT]: actionCreatorTasksInit,
  [eTasksActions.TASK_CREATE]: actionCreatorTaskCreate,
  [eTasksActions.TASK_UPDATE]: actionCreatorTaskUpdate,
  [eTasksActions.TASK_DELETE]: actionCreatorTaskDelete,
}

export default cTaskActionCreators;

