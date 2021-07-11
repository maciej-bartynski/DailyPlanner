import React from 'react';
import {Formik, FormikErrors} from 'formik';
import {iTaskFormCreate} from 'lib/models/task';
import useTasks from 'lib/storageAccess/tasks';
import TaskFormBody from 'atomic/organisms/TaskFormBody';

const creationInitialValues: iTaskFormCreate = {
  name: '',
  description: '',
  duration: 20,
};

type Props = {
  taskId?: string;
};

const TaskForm: React.FC<Props> = ({taskId}) => {
  const {methods} = useTasks();
  const {updateTask, getTask, createTask} = methods;
  const currentTask = taskId ? getTask(taskId) : null;
  const initialValues = Object.assign({}, creationInitialValues);

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

  const validate = (values: iTaskFormCreate) => {
    const errors: FormikErrors<iTaskFormCreate> = {};
    const {name, duration} = values;
    if (name.length < 4) {
      errors.name = 'Name should have at least 4 characters';
    }
    if (+duration < 1) {
      errors.duration = 'Min. duration time is 1 minute';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}>
      <TaskFormBody taskId={taskId} />
    </Formik>
  );
};

export default TaskForm;
