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
        name={eTaskFormFieldNames.Description}
        type={eFieldType.TextArea}
        label={eBoardFormFieldTexts.DescriptionLabel}
        placeholder={eBoardFormFieldTexts.DescriptionPlaceholder}
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
