import React from 'react';
import {Button} from 'react-native';
import {Formik, FormikErrors} from 'formik';
import {iTaskFormCreate} from 'lib/models/task';
import useTasks from 'lib/storageAccess/tasks';
import {InputArea, InputText, InputRange, Positioner} from 'atomic';
import navigationRef from 'lib/navigation/reference';
import {ScrollView} from 'react-native-gesture-handler';

const creationInitialValues: iTaskFormCreate = {
  name: '',
  description: '',
  duration: 20,
};

const TaskForm: React.FC<{
  taskId?: string;
}> = ({taskId}) => {
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
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        dirty,
      }) => (
        <>
          <ScrollView style={{width: '100%', padding: 10}}>
            <InputText
              label="Task name"
              placeholder="eg. Breakfast"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              expectError={true}
              error={errors.name}
            />

            <InputArea
              label="Description"
              placeholder="Put some description"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              expectError={true}
              error={errors.description}
              numberOfLines={10}
            />

            <InputRange
              min={1}
              max={60}
              value={values.duration}
              label={'Duration (min)'}
              onValueChange={handleChange('duration')}
            />
            <Positioner>
              <Button
                disabled={!(isValid && dirty)}
                onPress={() => {
                  handleSubmit();
                  if (isValid) {
                    navigationRef.current?.goBack();
                  }
                }}
                title={taskId ? 'Apply changes' : 'Create task'}
              />
            </Positioner>
          </ScrollView>
        </>
      )}
    </Formik>
  );
};

export default TaskForm;
