import React, { useCallback, useRef } from 'react';
import { iTask } from 'lib/models/task';
import useTasks from 'lib/hooks/useTasks';
import TaskFormBody from 'atomic/organisms/TaskFormBody';
import {
  TaskFormInitialValues,
  taskFormValidation,
  taskFormWarningManager,
} from './config';
import { Form } from 'lib/uniform';

type Props = {
  taskId?: string;
};

const TaskForm: React.FC<Props> = ({ taskId }) => {
  const { methods } = useTasks();
  const { updateTask, getTask, createTask } = methods;
  const currentTask = taskId ? getTask(taskId) : null;
  const initialValues = useRef(
    Object.assign({}, TaskFormInitialValues),
  ).current;

  if (currentTask) {
    initialValues.name = currentTask.item.name;
    initialValues.description = currentTask.item.description;
    initialValues.duration = currentTask.item.duration;
  }

  const onSubmit = useCallback(
    (values: iTask) => {
      if (currentTask && taskId) {
        updateTask(taskId, values);
      } else {
        createTask(values);
      }
    },
    [updateTask, createTask, currentTask, taskId],
  );

  return (
    <Form<iTask>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validation={taskFormValidation}
      warning={taskFormWarningManager}
    >
      <TaskFormBody taskId={taskId} />
    </Form>
  );
};

export default TaskForm;
