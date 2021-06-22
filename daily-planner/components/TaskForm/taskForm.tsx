import React from 'react';
import { View, Text, Button } from "react-native";
import { Formik, FormikProps, FormikErrors } from 'formik';
import { iTaskFormCreate } from 'lib/models/task';
import useTasks from 'lib/storageAccess/tasks';
import { TextInput } from 'react-native-gesture-handler';

const creationInitialValues: iTaskFormCreate = {
    name: "",
    description: "",
    duration: 20000
}

const TaskForm: React.FC<{
    taskId?: string,
}> = ({
    taskId
}) => {

  
        const { methods } = useTasks();
        const { updateTask, getTask, createTask } = methods;
        const currentTask = taskId ? getTask(taskId) : null;
        const initialValues = Object.assign({}, creationInitialValues);

        if (currentTask) {
            initialValues.name = currentTask.name;
            initialValues.description = currentTask.description;
            initialValues.duration = currentTask.duration;
        }
        console.log("RECEIE", currentTask)
        const onSubmit = (values: iTaskFormCreate) => {
            if (currentTask && taskId) { updateTask(taskId, values) }
            else { createTask(values) }
        }

        const validate = (values: iTaskFormCreate) => {
            const errors: FormikErrors<iTaskFormCreate> = {};
            const { name, duration } = values;
            if (name.length < 4) errors.name = "Name should have at least 4 characters";
            if (+duration < 10000) errors.duration = "Min. duration time is 10000";
            return errors;
        }

        return (
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                }) => (
                        <View>
                            <TextInput
                                style={{ borderWidth: 1 }}
                                placeholder="Task name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            <Text>{errors.name}</Text>
                            <TextInput
                                style={{ borderWidth: 1 }}
                                placeholder="Task description"
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                            />
                            <Text>{errors.description}</Text>
                            <TextInput
                                style={{ borderWidth: 1 }}
                                placeholder="Task durationdd11"
                                onChangeText={handleChange('duration')}
                                onBlur={handleBlur('duration')}
                                value={"" + values.duration}
                            />
                            <Text>{"" + (errors.duration || "")}</Text>
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>
                    )}
            </Formik>
        )
    }

export default TaskForm