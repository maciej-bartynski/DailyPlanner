import React from 'react';
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
  const initialValues = Object.assign({}, TaskFormInitialValues);

  if (currentTask) {
    initialValues.name = currentTask.name;
    initialValues.description = currentTask.description;
    initialValues.duration = currentTask.duration;
  }

  const onSubmit = (values: iTaskFormCreate) => {
    if (currentTask && taskId) {
      updateTask(taskId, values);
    } else {
      createTask(values);
    }
  };

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
