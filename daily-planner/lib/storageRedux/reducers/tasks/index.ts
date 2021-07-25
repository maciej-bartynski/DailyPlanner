import {eTasksActions} from 'lib/storageRedux/actions/tasks/types';
import reducerInitTasks from './reducerInitTasks';
import reducerDeleteTask from './reducerDeleteTask';
import reducerCreateTask from './reducerCreateTask';
import reducerUpdateTask from './reducerUpdateTask';
import reducerTasksLoading from './reducerTasksLoading';
import reducerTasksIssue from './reducerTasksIssue';

const cTasksReducers = {
  [eTasksActions.TASKS_INIT]: reducerInitTasks,
  [eTasksActions.TASK_CREATE]: reducerCreateTask,
  [eTasksActions.TASK_UPDATE]: reducerUpdateTask,
  [eTasksActions.TASK_DELETE]: reducerDeleteTask,
  [eTasksActions.TASKS_ISSUE]: reducerTasksIssue,
  [eTasksActions.TASKS_LOADING]: reducerTasksLoading,
};

export default cTasksReducers;
