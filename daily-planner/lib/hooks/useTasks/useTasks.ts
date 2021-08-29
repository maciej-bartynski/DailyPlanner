import {iTask} from 'lib/models/task';
import {useEffect, useCallback} from 'react';
import getTasks from 'api/tasks/getTasks';
import apiUpdateTask from 'api/tasks/updateTask';
import apiDeleteTask from 'api/tasks/deleteTask';
import apiCreateTask from 'api/tasks/createTask';
import getTaskById from 'api/tasks/getTaskById';
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from 'lib/storageRedux/storageRedux.store';
import {eTasksActions} from 'lib/storageRedux/actions/tasks/types';

const selectorGetTasksState = (state: RootState) => state.tasks;

const useTasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectorGetTasksState);

  const createTask = useCallback(
    async (fields: Omit<iTask, 'id'>) => {
      dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
      const {
        severity: creationSeverity,
        message: creationMessage,
        data: taskId,
      } = await apiCreateTask(fields);

      if (!taskId) {
        dispatch({
          type: eTasksActions.TASKS_ISSUE,
          payload: {
            severity: creationSeverity,
            message: creationMessage,
          },
        });
      } else {
        const {
          severity: getTaskSeverity,
          message: getTaskMessage,
          data: task,
        } = await getTaskById(taskId);

        if (task) {
          dispatch({
            type: eTasksActions.TASK_CREATE,
            payload: {
              severity: getTaskSeverity,
              message: getTaskMessage,
              task: task,
            },
          });
        } else {
          dispatch({
            type: eTasksActions.TASKS_ISSUE,
            payload: {
              severity: getTaskSeverity,
              message: getTaskMessage,
            },
          });
        }
      }
    },
    [dispatch],
  );

  const deleteTask = useCallback(
    async (id: string) => {
      dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
      const {severity, message} = await apiDeleteTask(id);
      dispatch({
        type: eTasksActions.TASK_DELETE,
        payload: {
          severity,
          message,
          id: id,
        },
      });
    },
    [dispatch],
  );

  const updateTask = useCallback(
    async (id: string, fields: Omit<iTask, 'id'>) => {
      dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
      const {severity, message} = await apiUpdateTask(id, fields);
      dispatch({
        type: eTasksActions.TASK_UPDATE,
        payload: {
          severity,
          message,
          id,
          fields,
        },
      });
    },
    [dispatch],
  );

  const getTask = useCallback(
    (id: string): iTask | null => {
      const entry = Object.entries(tasks.data.tasks || {}).find(
        taskEntry => taskEntry[0] === id,
      );
      console.log(entry)
      return entry ? entry[1] : null;
    },
    [tasks.data.tasks],
  );

  const loadAllTasksFromStorage = useCallback(async () => {
    dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
    const {severity, message, data: allTasks} = await getTasks();
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
    if (!tasks.wasDataFetchAttempt) {
      loadAllTasksFromStorage();
    }
  }, [loadAllTasksFromStorage, tasks.wasDataFetchAttempt]);

  return {
    severity: tasks.severity,
    message: tasks.message,
    loading: tasks.loading,
    data: tasks.data,
    wasDataFetchAttempt: tasks.wasDataFetchAttempt,
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
