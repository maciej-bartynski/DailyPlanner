import React, {useCallback, useRef} from 'react';
import {iTaskFormCreate} from 'lib/models/task';
import useTasks from 'lib/hooks/useTasks';
import TaskFormBody from 'atomic/organisms/TaskFormBody';
import {
  TaskFormInitialValues,
  taskFormValidation,
  taskFormWarningManager,
} from './config';
import Form from 'components/Form/Form';

type Props = {
  taskId?: string;
};

const TaskForm: React.FC<Props> = ({taskId}) => {
  const {methods} = useTasks();
  const {updateTask, getTask, createTask} = methods;
  const currentTask = taskId ? getTask(taskId) : null;
  const initialValues = useRef(
    Object.assign({}, TaskFormInitialValues),
  ).current;

  if (currentTask) {
    initialValues.name = currentTask.name;
    initialValues.description = currentTask.description;
    initialValues.duration = currentTask.duration;
    initialValues.hours = currentTask.hours;
  }

  const onSubmit = useCallback(
    (values: iTaskFormCreate) => {
      if (currentTask && taskId) {
        updateTask(taskId, values);
      } else {
        createTask(values);
      }
    },
    [updateTask, createTask, currentTask, taskId],
  );

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validation={taskFormValidation}
      warning={taskFormWarningManager}>
      <TaskFormBody taskId={taskId} />
    </Form>
  );
};

export default TaskForm;
