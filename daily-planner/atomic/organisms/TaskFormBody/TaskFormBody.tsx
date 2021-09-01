import React from 'react';
import navigationRef from 'lib/navigation/reference';
import Button from 'atomic/atoms/Button';
import { iTaskFormCreate } from 'lib/models/task';
import { useFormikContext } from 'formik';
import { eButtonTitles } from 'lib/enums/strings';
import Positioner from './atoms/Positioner';
import ScrollViewStyled from './atoms/ScrollView';
import { eTaskFormFieldNames } from 'components/TaskForm/config';
import BasicInput from 'lib/uniform/BasicInput';
import { Field } from 'lib/uniform';
import { eTaskFormFieldTexts } from 'lib/enums/task-form-strings';
import InputValueSlider from 'lib/uniform/InputValueSlider';
import ButtonActionRoundedSmall from 'atomic/atoms/ButtonActionRoundedSmall';
import ButtonActionRoundedBig from 'atomic/atoms/ButtonActionRoundedBig';

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

const HOURS_MAX_VALUE = 8;
const MINUTES_MAX_VALUE = 60;
const MINUTES_MIN_VALUE = 0;
const HOURS_MIN_VALUE = 0;

const TaskFormBody: React.FC<Props> = ({ taskId }) => {
  const { isValid, dirty, handleSubmit } = useFormikContext<iTaskFormCreate>();

  const submitButtonTitle = taskId
    ? eButtonTitles.ApplyChanges
    : eButtonTitles.CreateTask;

  const submitButtonAction = useSubmitButtonAction(handleSubmit, isValid);

  return (
    <ScrollViewStyled>
      <Field<iTaskFormCreate, eTaskFormFieldNames.Name>
        name={eTaskFormFieldNames.Name}
      >
        {({
          value,
          onChange,
          message,
          severity
        }) => (
            <BasicInput
              label={eTaskFormFieldTexts.NameLabel}
              placeholder={eTaskFormFieldTexts.NamePlaceholder}
              onChange={onChange}
              value={value}
              message={message}
              messageSeverity={severity}
            />
          )}
      </Field>

      <Field<iTaskFormCreate, eTaskFormFieldNames.Description>
        name={eTaskFormFieldNames.Description}
      >
        {({
          value,
          onChange,
          message,
          severity
        }) => (
            <BasicInput
              label={eTaskFormFieldTexts.DescriptionLabel}
              placeholder={eTaskFormFieldTexts.DescriptionPlaceholder}
              onChange={onChange}
              value={value}
              message={message}
              messageSeverity={severity}
              numberOfLines={100}
            />
          )}
      </Field>

      <Field<iTaskFormCreate, eTaskFormFieldNames.Duration>
        name={eTaskFormFieldNames.Duration}
      >
        {({
          numericValue,
          onNumericChangeHandler,
          message,
          severity
        }) => (
            <InputValueSlider
              label={eTaskFormFieldTexts.DurationLabel}
              onChange={onNumericChangeHandler}
              value={numericValue}
              unit={'min'}
              message={message}
              messageSeverity={severity}
              min={1}
              max={60}
            />
          )}
      </Field>

      <Positioner>
        {(isValid && dirty) && <ButtonActionRoundedBig
          onPress={submitButtonAction}
          label={submitButtonTitle}
        />}
      </Positioner>
    </ScrollViewStyled>
  );
};

export default TaskFormBody;
