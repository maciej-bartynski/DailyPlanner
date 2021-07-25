import { eTasksActions } from 'lib/storageRedux/storageRedux.types';
import reducerInitTasks from './reducerInitTasks';
import reducerDeleteTask from './reducerDeleteTask';
import reducerCreateTask from './reducerCreateTask';
import reducerUpdateTask from './reducerUpdateTask';

const cTasksReducers = {
  [eTasksActions.TASKS_INIT]: reducerInitTasks,
  [eTasksActions.TASK_CREATE]: reducerCreateTask,
  [eTasksActions.TASK_UPDATE]: reducerUpdateTask,
  [eTasksActions.TASK_DELETE]: reducerDeleteTask,
}

export default cTasksReducers;