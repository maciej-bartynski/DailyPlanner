import React from 'react';
import navigationRef from 'lib/navigation/reference';
import Button from 'atomic/atoms/Button';
import { iTaskFormCreate } from 'lib/models/task';
import { useFormikContext } from 'formik';
import { eButtonTitles } from 'lib/enums/strings';
import Positioner from './atoms/Positioner';
import ScrollViewStyled from './atoms/ScrollView';
import { eTaskFormFieldTexts } from 'lib/enums/task-form-strings';
import {
  eTaskFormFieldNames,
  taskFormWarningManager,
} from 'components/TaskForm/config';
import FormField from 'atomic/molecules/FormField';
import { eFieldType } from 'lib/enums/forms';
import { InputTextProps } from 'atomic/atoms/InputText/InputText';
import { InputRangeProps } from 'atomic/atoms/InputValueSlider/InputValueSlider';
import { InputAreaProps } from 'atomic/atoms/InputArea/inputArea';
import formFieldStyles from './stylesOverride/FormField.styles';
import FieldLabel from 'atomic/atoms/FieldLabel';

type Props = {
  taskId?: string;
};

const useSubmitButtonAction = (
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
  isValid: boolean,
) =>
  React.useCallback(() => {
    handleSubmit();
    if (isValid) {
      navigationRef.current?.goBack();
    }
  }, [handleSubmit, isValid]);


function determineTimeEdgeValues(currentMin: number, currentHours: number) {
  return {
    hoursMaxValue: currentMin ? 23 : 24,
    minutesMaxValue: currentHours ? 59 : 60,
    minutesMinValue: currentHours ? 0 : 1
  }
}

const TaskFormBody: React.FC<Props> = ({ taskId }) => {
  const { isValid, dirty, handleSubmit, values } = useFormikContext<iTaskFormCreate>();

  const currentDurationValue = +values[eTaskFormFieldNames.Duration];
  const currentHoursValue = +values[eTaskFormFieldNames.Hours];

  const {
    hoursMaxValue,
    minutesMaxValue,
    minutesMinValue
  } = determineTimeEdgeValues(
    currentDurationValue,
    currentHoursValue
  )

  const submitButtonTitle = taskId
    ? eButtonTitles.ApplyChanges
    : eButtonTitles.CreateTask;

  const submitButtonAction = useSubmitButtonAction(handleSubmit, isValid);

  return (
    <ScrollViewStyled>
      <FormField<iTaskFormCreate, InputTextProps>
        name={eTaskFormFieldNames.Name}
        type={eFieldType.TextInput}
        label={eTaskFormFieldTexts.NameLabel}
        placeholder={eTaskFormFieldTexts.NamePlaceholder}
        formWarningManager={taskFormWarningManager}
      />
      <FormField<iTaskFormCreate, InputAreaProps>
        name={eTaskFormFieldNames.Description}
        type={eFieldType.TextArea}
        label={eTaskFormFieldTexts.DescriptionLabel}
        placeholder={eTaskFormFieldTexts.DescriptionPlaceholder}
        formWarningManager={taskFormWarningManager}
      />
      <FieldLabel label='Task duration'>
        <FormField<iTaskFormCreate, InputRangeProps>
          name={eTaskFormFieldNames.Hours}
          type={eFieldType.ValueSlider}
          label={eTaskFormFieldTexts.HoursLabel}
          formWarningManager={taskFormWarningManager}
          min={0}
          max={hoursMaxValue}
          formFieldStyles={formFieldStyles}
          unit='hour(s)'
        />
        <FormField<iTaskFormCreate, InputRangeProps>
          name={eTaskFormFieldNames.Duration}
          type={eFieldType.ValueSlider}
          label={eTaskFormFieldTexts.DurationLabel}
          formWarningManager={taskFormWarningManager}
          min={minutesMinValue}
          max={minutesMaxValue}
          formFieldStyles={formFieldStyles}
          unit='minute(s)'
        />
      </FieldLabel>
      <Positioner>
        <Button
          disabled={!(isValid && dirty)}
          onPress={submitButtonAction}
          title={submitButtonTitle}
        />
      </Positioner>
    </ScrollViewStyled>
  );
};

export default TaskFormBody;
