import { iTask } from 'lib/models/task';
import { useReducer, useMemo, useEffect } from 'react';
import { tasksInitialState, tasksReducer, eUseTasksActionName } from './useTasks.reducer';
import getTasks from 'api/tasks/getTasks';
import apiUpdateTask from 'api/tasks/updateTask';
import apiDeleteTask from 'api/tasks/deleteTask';
import apiCreateTask from 'api/tasks/createTask';
import getTaskById from 'api/tasks/getTaskById';

const useTasks = () => {
  const [state, dispatch] = useReducer(tasksReducer, tasksInitialState);

  const createTask = async (fields: Omit<iTask, 'id'>) => {
    dispatch({ type: eUseTasksActionName.Loading });
    const { severity: creationSeverity, message: creationMessage, data: taskId } = await apiCreateTask(fields);

    if (!taskId) {
      dispatch({
        type: eUseTasksActionName.Data,
        severity: creationSeverity,
        message: creationMessage,
      });
    } else {

      const {
        severity: getTaskSeverity,
        message: getTaskMessage,
        data: task
      } = await getTaskById(taskId || "");

      if (task) {
        dispatch({
          type: eUseTasksActionName.Data,
          severity: getTaskSeverity,
          message: getTaskMessage,
          data: {
            tasks: {
              ...state.data.tasks,
              [taskId]: task,
            },
            total: Object.keys(state.data.tasks || {}).length + 1,
          },
        });
      } else {
        dispatch({
          type: eUseTasksActionName.Data,
          severity: getTaskSeverity,
          message: getTaskMessage,
        });
      }

    }
  };

  const deleteTask = async (id: string) => {
    dispatch({ type: eUseTasksActionName.Loading });
    const { severity, message } = await apiDeleteTask(id);
    let newTasks: Record<string, iTask> = {};
    if (state.data.tasks) {
      newTasks = { ...state.data.tasks };
      delete newTasks[id];
    }
    dispatch({
      type: eUseTasksActionName.Data,
      severity,
      message,
      data: {
        tasks: newTasks,
        total: Object.keys(newTasks || {}).length,
      },
    });
  };

  const updateTask = async (id: string, fields: Omit<iTask, 'id'>) => {
    dispatch({ type: eUseTasksActionName.Loading });
    const { severity, message } = await apiUpdateTask(id, fields);
    const taskToUpdate = state.data.tasks && state.data.tasks[id];
    const newTasks = state.data.tasks && taskToUpdate
      ? {
        ...state.data.tasks,
        [id]: {
          ...taskToUpdate,
          ...fields,
        }
      }
      : state.data.tasks

    dispatch({
      type: eUseTasksActionName.Data,
      severity,
      message,
      data: {
        tasks: newTasks,
        total: Object.keys(newTasks || {}).length,
      },
    });
  };

  const getTask = (id: string): iTask | null => {
    const entry = Object.entries(state.data.tasks || {}).find(
      taskEntry => taskEntry[0] === id,
    );
    return entry ? entry[1] : null;
  };

  async function loadAllFromStorage() {
    dispatch({ type: eUseTasksActionName.Loading });
    const { severity, message, data: tasks } = await getTasks();
    dispatch({
      type: eUseTasksActionName.Data,
      severity,
      message,
      data: {
        tasks,
        total: Object.keys(tasks || {}).length,
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
      ...state,
      methods: {
        createTask,
        deleteTask,
        updateTask,
        getTask,
      },
    }),
    [state],
  );
};

export default useTasks;
