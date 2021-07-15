import React, {useCallback, useRef} from 'react';
import {Formik} from 'formik';
import {iTaskFormCreate} from 'lib/models/task';
import useTasks from 'lib/storageAccess/tasks';
import TaskFormBody from 'atomic/organisms/TaskFormBody';
import {TaskFormInitialValues, taskFormValidation} from './config';

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
    <Formik
      initialValues={initialValues}
      validate={taskFormValidation}
      onSubmit={onSubmit}>
      <TaskFormBody taskId={taskId} />
    </Formik>
  );
};

export default TaskForm;
