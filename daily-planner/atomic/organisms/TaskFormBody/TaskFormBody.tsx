import React from 'react';
import navigationRef from 'lib/navigation/reference';
import Button from 'atomic/atoms/Button';
import {iTaskFormCreate} from 'lib/models/task';
import {useFormikContext} from 'formik';
import {eButtonTitles} from 'lib/enums/strings';
import Positioner from './atoms/Positioner';
import ScrollViewStyled from './atoms/ScrollView';
import {eTaskFormFieldTexts} from 'lib/enums/task-form-strings';
import {eTaskFormFieldNames} from 'components/TaskForm/config';
import FormField from 'lib/uniform/Field';
import {eFieldType} from 'lib/enums/forms';
import {InputAreaProps} from 'lib/uniform/InputTextArea/InputTextArea';
import FieldLabel from 'lib/uniform/Label';
import valueSliderStyles from './stylesOverride/ValueSlider.styles';
import FormFieldIssuesManager from 'lib/uniform/Message';
import FormFieldIssueBorder from 'lib/uniform/Border';
import {InputTextProps} from 'lib/uniform/InputText/InputText';
import {InputRangeProps} from 'lib/uniform/InputValueSlider/InputValueSlider';

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

const TaskFormBody: React.FC<Props> = ({taskId}) => {
  const {isValid, dirty, handleSubmit} = useFormikContext<iTaskFormCreate>();

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
      />
      <FormField<iTaskFormCreate, InputAreaProps>
        name={eTaskFormFieldNames.Description}
        type={eFieldType.TextArea}
        label={eTaskFormFieldTexts.DescriptionLabel}
        placeholder={eTaskFormFieldTexts.DescriptionPlaceholder}
      />
      <FieldLabel label="Task duration">
        <FormFieldIssueBorder<iTaskFormCreate>
          name={eTaskFormFieldNames.Duration}>
          <FormField<iTaskFormCreate, InputRangeProps>
            name={eTaskFormFieldNames.Hours}
            type={eFieldType.ValueSlider}
            label={eTaskFormFieldTexts.HoursLabel}
            min={HOURS_MIN_VALUE}
            max={HOURS_MAX_VALUE}
            styles={valueSliderStyles}
            unit="hour(s)"
          />
          <FormField<iTaskFormCreate, InputRangeProps>
            name={eTaskFormFieldNames.Duration}
            type={eFieldType.ValueSlider}
            label={eTaskFormFieldTexts.DurationLabel}
            min={MINUTES_MIN_VALUE}
            max={MINUTES_MAX_VALUE}
            styles={valueSliderStyles}
            unit="minute(s)"
          />
        </FormFieldIssueBorder>
        <FormFieldIssuesManager<iTaskFormCreate>
          name={eTaskFormFieldNames.Duration}
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
