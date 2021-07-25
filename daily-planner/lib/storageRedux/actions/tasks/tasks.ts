import {
  eTasksActions,
  tActionCreatorTaskInit,
  tActionCreatorTaskCreate,
  tActionCreatorTaskUpdate,
  tActionCreatorTaskDelete,
  tActionCreatorTasksLoading,
  tActionCreatorTasksIssue,
} from './types';

export const actionCreatorTasksInit: tActionCreatorTaskInit = ({
  tasks,
  severity,
  message,
}) => {
  return {
    type: eTasksActions.TASKS_INIT,
    payload: {
      tasks,
      severity,
      message,
    },
  };
};

export const actionCreatorTaskCreate: tActionCreatorTaskCreate = ({
  severity,
  message,
  task,
}) => {
  return {
    type: eTasksActions.TASK_CREATE,
    payload: {
      severity,
      message,
      task,
    },
  };
};

export const actionCreatorTaskUpdate: tActionCreatorTaskUpdate = ({
  id,
  fields,
  message,
  severity,
}) => {
  return {
    type: eTasksActions.TASK_UPDATE,
    payload: {
      id,
      fields,
      message,
      severity,
    },
  };
};

export const actionCreatorTaskDelete: tActionCreatorTaskDelete = ({
  id,
  message,
  severity,
}) => {
  return {
    type: eTasksActions.TASK_DELETE,
    payload: {
      id,
      message,
      severity,
    },
  };
};

export const actionCreatorTasksLoading: tActionCreatorTasksLoading = ({
  loading,
}) => {
  return {
    type: eTasksActions.TASKS_LOADING,
    payload: {
      loading,
    },
  };
};

export const actionCreatorTasksIssue: tActionCreatorTasksIssue = ({
  severity,
  message,
}) => {
  return {
    type: eTasksActions.TASKS_ISSUE,
    payload: {
      severity,
      message,
    },
  };
};
