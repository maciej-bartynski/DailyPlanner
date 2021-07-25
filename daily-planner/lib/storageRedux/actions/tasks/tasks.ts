import { eTasksActions, tTaskInitActionCreator } from './types';
import { iTask } from 'lib/models/task';

export const actionCreatorTasksInit: tTaskInitActionCreator =
  ({ tasks, severity, message }) => {
    return {
      type: eTasksActions.TASKS_INIT,
      payload: {
        tasks,
        severity,
        message,
      },
    };
  };

export const actionCreatorTaskCreate = (task: iTask) => {
  return {
    type: eTasksActions.TASK_CREATE,
    payload: task,
  };
};

export const actionCreatorTaskUpdate = (
  id: string,
  taskFields: Partial<iTask>,
) => {
  return {
    type: eTasksActions.TASK_UPDATE,
    payload: { id, fields: taskFields },
  };
};

export const actionCreatorTaskDelete = (id: iTask['id']) => {
  return {
    type: eTasksActions.TASK_DELETE,
    payload: id,
  };
};
