import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import defaultStyles, { tFormFieldStylesheetType } from './FormField.styles';
import { useFormikContext } from 'formik';
import useWarnings from './useWarning';
import { InputText, InputArea } from 'atomic/atoms';
import InputRange from 'atomic/atoms/InputRange';
import { InputTextProps } from 'atomic/atoms/InputText/inputText';
import { InputRangeProps } from 'atomic/atoms/InputRange/InputRange';
import { InputAreaProps } from 'atomic/atoms/InputArea/inputArea';
import { eFieldType } from 'lib/enums/forms';
import { eColors } from 'lib/styles/colors';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';

type FormFieldRequiredProps<FormContextType> = {
  name: keyof FormContextType;
  label?: string;
  type: eFieldType;
  styles?: tFormFieldStylesheetType;
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
  const {
    styles,
    name,
    label,
    formWarningManager,
    type,
    children,
    ...rest
  } = props;

  const resultStyles = useResultStylesheet<tFormFieldStylesheetType>({
    defaultStyles,
    styles,
  })

  const { handleChange, handleBlur, values, errors } =
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
          borderColor={borderColor}
          onBlur={onBlurHandler}
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
          borderColor={borderColor}
          onBlur={onBlurHandler}
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
      <View style={resultStyles.wrapper}>
        {label ? <Text style={resultStyles.label}>{label}</Text> : null}
        {currentInputElement}
        {currentError ? <Text style={resultStyles.error}>{currentError}</Text> : null}
        {!currentError && currentWarning ? (
          <Text style={resultStyles.warning}>{currentWarning}</Text>
        ) : null}
      </View>
    )
  );
};

export default FormField;
