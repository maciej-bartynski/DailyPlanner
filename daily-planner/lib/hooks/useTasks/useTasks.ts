import { iTask } from 'lib/models/task';
import { useEffect, useCallback } from 'react';
import getTasks from 'api/tasks/getTasks';
import apiUpdateTask from 'api/tasks/updateTask';
import apiDeleteTask from 'api/tasks/deleteTask';
import apiCreateTask from 'api/tasks/createTask';
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from 'lib/storageRedux/storageRedux.store';
import { eTasksActions } from 'lib/storageRedux/actions/tasks/types';
import { iStorageItem } from 'lib/storageLocal/_types';

const selectorGetTasksState = (state: RootState) => state.tasks;

const useTasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectorGetTasksState);

  const createTask = useCallback(
    async (fields: Omit<iTask, 'id'>) => {
      dispatch({ type: eTasksActions.TASKS_LOADING, payload: { loading: true } });
      const {
        severity: creationSeverity,
        message: creationMessage,
        data: task,
      } = await apiCreateTask(fields);

      if (!task) {
        dispatch({
          type: eTasksActions.TASKS_ISSUE,
          payload: {
            severity: creationSeverity,
            message: creationMessage,
          },
        });
      } else {
        dispatch({
          type: eTasksActions.TASK_CREATE,
          payload: {
            severity: creationSeverity,
            message: creationMessage,
            task,
          },
        });
      }
    },
    [dispatch],
  );

  const deleteTask = useCallback(
    async (id: string) => {
      dispatch({ type: eTasksActions.TASKS_LOADING, payload: { loading: true } });
      const { severity, message } = await apiDeleteTask(id);
      dispatch({
        type: eTasksActions.TASK_DELETE,
        payload: {
          severity,
          message,
          id: id,
        },
      });

      loadAllTasksFromStorage();
    },
    [dispatch],
  );

  const updateTask = useCallback(
    async (id: string, fields: iTask) => {
      dispatch({ type: eTasksActions.TASKS_LOADING, payload: { loading: true } });
      const { severity, message, data } = await apiUpdateTask(id, fields);
      if (data) {
        dispatch({
          type: eTasksActions.TASK_UPDATE,
          payload: {
            severity,
            message,
            id: data._id,
            fields: data,
          },
        });
      }
    },
    [dispatch],
  );

  const getTask = useCallback(
    (id: string): iStorageItem<iTask> | null => {
      const entry = Object.entries(tasks.data.tasks || {}).find(
        taskEntry => taskEntry[0] === id,
      );
      return entry ? entry[1] : null;
    },
    [tasks.data.tasks],
  );

  const loadAllTasksFromStorage = useCallback(async () => {
    dispatch({ type: eTasksActions.TASKS_LOADING, payload: { loading: true } });
    const { severity, message, data: allTasks } = await getTasks();
    dispatch({
      type: eTasksActions.TASKS_INIT,
      payload: {
        severity,
        message,
        tasks: allTasks || {},
      },
    });
  }, [dispatch]);

  useEffect(() => {
    if (tasks.data.tasks === null) loadAllTasksFromStorage();
  }, [loadAllTasksFromStorage]);

  return {
    severity: tasks.severity,
    message: tasks.message,
    loading: tasks.loading,
    data: tasks.data,
    methods: {
      createTask,
      deleteTask,
      updateTask,
      getTask,
      loadAllTasksFromStorage,
    },
  };
};

export default useTasks;
