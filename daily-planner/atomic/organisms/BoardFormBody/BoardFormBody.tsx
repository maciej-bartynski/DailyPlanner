import React from 'react';
import navigationRef from 'lib/navigation/reference';
import Button from 'atomic/atoms/Button';
import {useFormikContext} from 'formik';
import {eButtonTitles} from 'lib/enums/strings';
import Positioner from './atoms/Positioner';
import ScrollViewStyled from './atoms/ScrollView';
import {eTaskFormFieldNames} from 'components/TaskForm/config';
import FormField from 'lib/uniform/Field';
import {eFieldType} from 'lib/enums/forms';
import {InputAreaProps} from 'lib/uniform/InputTextArea/InputTextArea';
import {InputTextProps} from 'lib/uniform/InputText/InputText';
import {iBoardFormCreate} from 'lib/models/board';
import {eBoardFormFieldNames} from 'components/BoardForm/config';
import {eBoardFormFieldTexts} from 'lib/enums/board-form-strings';
import {InputMultiselectProps} from 'lib/uniform/InputMultiselect/InputMultiselect';

type Props = {
  boardId?: string;
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

const BoardFormBody: React.FC<Props> = ({boardId}) => {
  const {isValid, dirty, handleSubmit} = useFormikContext<iBoardFormCreate>();

  const submitButtonTitle = boardId
    ? eButtonTitles.ApplyChanges
    : eButtonTitles.CreateTask;

  const submitButtonAction = useSubmitButtonAction(handleSubmit, isValid);

  return (
    <ScrollViewStyled>
      <FormField<iBoardFormCreate, InputTextProps>
        name={eBoardFormFieldNames.Title}
        type={eFieldType.TextInput}
        label={eBoardFormFieldTexts.TitleLabel}
        placeholder={eBoardFormFieldTexts.TitlePlaceholder}
      />
      <FormField<iBoardFormCreate, InputAreaProps>
        name={eBoardFormFieldNames.Description}
        type={eFieldType.TextArea}
        label={eBoardFormFieldTexts.DescriptionLabel}
        placeholder={eBoardFormFieldTexts.DescriptionPlaceholder}
      />
      <FormField<iBoardFormCreate, InputMultiselectProps>
        name={eBoardFormFieldNames.Tasks}
        type={eFieldType.Multiselect}
        label={eBoardFormFieldTexts.TasksLabel}
        options={[
          {label: 'taskid1', value: 'Somea!1'},
          {label: 'taskid2', value: 'Somea!2'},
          {label: 'taskid3', value: 'Somea!3'},
          {label: 'taskid32', value: 'Someaasdf!3'},
          {label: 'taskid33', value: 'Someax!3'},
          {label: 'taskid233', value: 'Somea!d3'},
          {label: 'taskidd3', value: 'Somea!zX3'},
          {label: 'taskidfasdfd3', value: 'Somxcea!3'},
          {label: 'taskid3', value: 'Someavczxc!3'},
          {label: 'tassdfkid3', value: 'Somea!dzx3'},
          {label: 'taskisadfd3', value: 'Someazx!3'},
          {label: 'taskid3', value: 'Someazxc!3'},
          {label: 'tassdfkid3', value: 'Somzxcea!3'},
          {label: 'taskid3', value: 'Somea!3z'},
          {label: 'tasksdfid3', value: 'Someazxc!3'},
          {label: 'taskid3', value: 'Somezxczxa!3'},
          {label: 'taskid3', value: 'Somezxa!3'},
          {label: 'taskid3', value: 'Somea!zx3'},
          {label: 'taskid3', value: 'Somexza!3'},
          {label: 'taskid3', value: 'Somezxca!3'},
          {label: 'taskid3', value: 'Someazxc!3'},
          {label: 'taskid3', value: 'Somea!xxx3'},
          {label: 'taskid3', value: 'Somea!zxcz3'},
          {label: 'taskid3', value: 'Somea!zxc3'},
        ]}
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

export default BoardFormBody;
