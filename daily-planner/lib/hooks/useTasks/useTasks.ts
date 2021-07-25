import {iTask} from 'lib/models/task';
import {useMemo, useEffect} from 'react';
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
  const _dispatch = useAppDispatch();
  const tasks = useAppSelector(selectorGetTasksState);

  const createTask = async (fields: Omit<iTask, 'id'>) => {
    _dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
    const {
      severity: creationSeverity,
      message: creationMessage,
      data: taskId,
    } = await apiCreateTask(fields);

    if (!taskId) {
      _dispatch({
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
      } = await getTaskById(taskId || '');

      if (task) {
        _dispatch({
          type: eTasksActions.TASK_CREATE,
          payload: {
            severity: getTaskSeverity,
            message: getTaskMessage,
            task,
          },
        });
      } else {
        _dispatch({
          type: eTasksActions.TASKS_ISSUE,
          payload: {
            severity: getTaskSeverity,
            message: getTaskMessage,
          },
        });
      }
    }
  };

  const deleteTask = async (id: string) => {
    _dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
    const {severity, message} = await apiDeleteTask(id);
    _dispatch({
      type: eTasksActions.TASK_DELETE,
      payload: {
        severity,
        message,
        id: id,
      },
    });
  };

  const updateTask = async (id: string, fields: Omit<iTask, 'id'>) => {
    _dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
    const {severity, message} = await apiUpdateTask(id, fields);
    _dispatch({
      type: eTasksActions.TASK_UPDATE,
      payload: {
        severity,
        message,
        id,
        fields,
      },
    });
  };

  const getTask = (id: string): iTask | null => {
    const entry = Object.entries(tasks.data.tasks || {}).find(
      taskEntry => taskEntry[0] === id,
    );
    return entry ? entry[1] : null;
  };

  async function loadAllFromStorage() {
    _dispatch({type: eTasksActions.TASKS_LOADING, payload: {loading: true}});
    const {severity, message, data: allTasks} = await getTasks();
    _dispatch({
      type: eTasksActions.TASKS_INIT,
      payload: {
        severity,
        message,
        tasks: allTasks || {},
      },
    });
  }

  useEffect(
    () => {
      loadAllFromStorage();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return useMemo(
    () => ({
      ...tasks,
      methods: {
        createTask,
        deleteTask,
        updateTask,
        getTask,
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tasks, _dispatch],
  );
};

export default useTasks;
