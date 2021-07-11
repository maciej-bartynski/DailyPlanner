import React from 'react';
import {InputArea, InputText, InputRange} from 'atomic';
import navigationRef from 'lib/navigation/reference';
import Button from 'atomic/atoms/Button';
import {iTaskFormCreate} from 'lib/models/task';
import {useFormikContext} from 'formik';
import {eButtonTitles} from 'lib/enums/strings';
import Positioner from './atoms/Positioner';
import ScrollViewStyled from './atoms/ScrollView';

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

  const submitButtonTitle = taskId
    ? eButtonTitles.ApplyChanges
    : eButtonTitles.CreateTask;

  const submitButtonAction = useSubmitButtonAction(handleSubmit, isValid);

  return (
    <ScrollViewStyled>
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
          onPress={submitButtonAction}
          title={submitButtonTitle}
        />
      </Positioner>
    </ScrollViewStyled>
  );
};

export default TaskFormBody;
