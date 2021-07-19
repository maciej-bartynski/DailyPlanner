import React from 'react';
import FieldLabel from 'atomic/atoms/FieldLabel';
import {useFormikContext} from 'formik';
import {iTaskFormCreate} from 'lib/models/task';
import useWarnings from 'atomic/molecules/FormField/useWarning';
import {taskFormWarningManager} from '../config';
import {Text} from 'react-native';

const TaskFormDurationField: React.FC = ({children}) => {
  const context = useFormikContext<iTaskFormCreate>();
  const currentErrorHours = context.errors.hours;
  const currentErrorDuration = context.errors.duration;
  const warnings = useWarnings<iTaskFormCreate>(
    context.values,
    taskFormWarningManager,
  );
  const currentWarningHours = warnings && warnings.hours;
  const currentWarningDuration = warnings && warnings.duration;

  const allowWarning = !currentErrorDuration && !currentErrorHours;
  return (
    <FieldLabel label="Task duration">
      {children}
      <Text>{currentErrorHours}</Text>
      <Text>{currentErrorDuration}</Text>
      {allowWarning ? (
        <Text>{currentWarningDuration || currentWarningHours}</Text>
      ) : null}
    </FieldLabel>
  );
};

export default TaskFormDurationField;
