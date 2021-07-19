import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import defaultStyles, {tFormFieldStylesheetType} from './FormField.styles';
import {useFormikContext} from 'formik';
import useWarnings from './useWarning';
import {InputArea} from 'atomic/atoms';
import InputText from 'atomic/atoms/InputText';
import InputRange from 'atomic/atoms/InputValueSlider';
import {InputTextProps} from 'atomic/atoms/InputText/InputText';
import {InputRangeProps} from 'atomic/atoms/InputValueSlider/InputValueSlider';
import {InputAreaProps} from 'atomic/atoms/InputArea/inputArea';
import {eFieldType} from 'lib/enums/forms';
import {eColors} from 'lib/styles/colors';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import FieldLabel from 'atomic/atoms/FieldLabel';

type FormFieldRequiredProps<FormContextType> = {
  name: keyof FormContextType;
  label: string;
  type: eFieldType;
  formFieldStyles?: Partial<tFormFieldStylesheetType>;
  formWarningManager: (
    values: FormContextType,
  ) => Promise<Partial<Record<keyof FormContextType, string>>>;
};

type InputProps<CurrentInputProps> = Omit<
  CurrentInputProps,
  'onValueChange' | 'onChangeText' | 'value'
>;

const FormField = function <FormContextType, CustomInputProps>(
  props: PropsWithChildren<
    InputProps<CustomInputProps> & FormFieldRequiredProps<FormContextType>
  >,
) {
  const {formFieldStyles, name, label, formWarningManager, type, ...rest} =
    props;

  const resultStyles = useResultStylesheet<tFormFieldStylesheetType>({
    defaultStyles,
    styles: formFieldStyles,
  });

  const {handleChange, handleBlur, values, errors} =
    useFormikContext<FormContextType>();

  const currentValue = values[name];
  const currentError = errors[name];
  const warnings = useWarnings<FormContextType>(values, formWarningManager);
  const currentWarning = warnings ? warnings[name] : '';
  let currentInputElement = null;
  const onChangeHandler = handleChange(name);
  const onBlurHandler = handleBlur(name as string);

  const borderColor = currentError
    ? eColors.Error
    : currentWarning
    ? eColors.Warning
    : eColors.Primary;

  switch (true) {
    case type === eFieldType.TextInput: {
      const fieldProps = rest as unknown as InputTextProps;
      currentInputElement = (
        <InputText
          {...fieldProps}
          value={currentValue as unknown as string}
          onChangeText={onChangeHandler}
          onBlur={onBlurHandler}
          borderColor={borderColor}
        />
      );
      break;
    }
    case type === eFieldType.TextArea: {
      const fieldProps = rest as unknown as InputAreaProps;
      currentInputElement = (
        <InputArea
          {...fieldProps}
          value={currentValue as unknown as string}
          onChangeText={onChangeHandler}
          onBlur={onBlurHandler}
          borderColor={borderColor}
        />
      );
      break;
    }
    case type === eFieldType.ValueSlider: {
      const fieldProps = rest as unknown as InputRangeProps;
      currentInputElement = (
        <InputRange
          {...fieldProps}
          value={currentValue as unknown as number}
          onValueChange={onChangeHandler}
          borderColor={borderColor}
        />
      );
      break;
    }
    default: {
      currentInputElement = null;
    }
  }

  return (
    currentInputElement && (
      <FieldLabel label={label || ''} styles={resultStyles}>
        {currentInputElement}
        {currentError ? (
          <Text style={resultStyles.fieldError}>{currentError}</Text>
        ) : null}
        {!currentError && currentWarning ? (
          <Text style={resultStyles.fieldWarning}>{currentWarning}</Text>
        ) : null}
      </FieldLabel>
    )
  );
};

export default FormField;
