import React, {useState, useEffect} from 'react';
import {InputArea, InputText, InputRange} from 'atomic';
import navigationRef from 'lib/navigation/reference';
import Button from 'atomic/atoms/Button';
import {iTaskFormCreate} from 'lib/models/task';
import {useFormikContext, FormikErrors} from 'formik';
import {eButtonTitles} from 'lib/enums/strings';
import Positioner from './atoms/Positioner';
import ScrollViewStyled from './atoms/ScrollView';
import {eTaskFormFieldTexts} from 'lib/enums/task-form-strings';
import {
  eTaskFormFieldNames,
  taskFormWarningManager,
} from 'components/TaskForm/config';
import {Text} from 'react-native';

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

const useWarnings = (values: iTaskFormCreate) => {
  const [warnings, setWarnings] = useState<
    FormikErrors<Record<eTaskFormFieldNames, string>>
  >({});

  async function getWarnings(valuesReceived: iTaskFormCreate) {
    const warns = await taskFormWarningManager(valuesReceived);
    setWarnings(warns);
  }

  useEffect(() => {
    getWarnings(values);
  }, [values]);

  return warnings;
};

const TaskFormBody: React.FC<Props> = ({taskId}) => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    isValid,
    dirty,
    handleSubmit,
  } = useFormikContext<iTaskFormCreate>();

  const warnings = useWarnings(values);

  const submitButtonTitle = taskId
    ? eButtonTitles.ApplyChanges
    : eButtonTitles.CreateTask;

  const submitButtonAction = useSubmitButtonAction(handleSubmit, isValid);

  return (
    <ScrollViewStyled>
      <InputText
        label={eTaskFormFieldTexts.NameLabel}
        placeholder={eTaskFormFieldTexts.DescriptionPlaceholder}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        expectError={true}
        error={errors.name}
      />
      <Text>{warnings?.name}</Text>

      <InputArea
        label={eTaskFormFieldTexts.DescriptionLabel}
        placeholder={eTaskFormFieldTexts.DescriptionPlaceholder}
        onChangeText={handleChange('description')}
        onBlur={handleBlur('description')}
        value={values.description}
        expectError={true}
        error={errors.description}
        numberOfLines={10}
      />

      <Text>{warnings?.description}</Text>

      <InputRange
        min={1}
        max={60}
        value={values.duration}
        label={eTaskFormFieldTexts.DurationLabel}
        onValueChange={handleChange('duration')}
      />

      <Text>{warnings?.duration}</Text>
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
