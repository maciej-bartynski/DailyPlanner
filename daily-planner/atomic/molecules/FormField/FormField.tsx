import React, {PropsWithChildren} from 'react';
import defaultStyles, {tFormFieldStylesheetType} from './FormField.styles';
import {FormikContextType} from 'formik';
import {InputArea} from 'atomic/atoms';
import InputText from 'atomic/atoms/InputText';
import InputRange from 'atomic/atoms/InputValueSlider';
import {InputTextProps} from 'atomic/atoms/InputText/InputText';
import {InputRangeProps} from 'atomic/atoms/InputValueSlider/InputValueSlider';
import {eFieldType} from 'lib/enums/forms';
import {eColors} from 'lib/styles/colors';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import FieldLabel from 'atomic/atoms/FieldLabel';
import FormFieldIssuesManager from 'atomic/atoms/FormFieldIssuesManager';
import {useFormContext} from 'components/Form/config';

type FormFieldRequiredProps<FormContextType> = {
  name: keyof FormikContextType<FormContextType>['values'];
  label: string;
  type: eFieldType;
  formFieldStyles?: Partial<tFormFieldStylesheetType>;
};

type InputProps<CurrentInputProps> = Omit<
  CurrentInputProps,
  'onValueChange' | 'onChangeText' | 'value'
>;

const DEFAULT_PROPS_INPUT_RANGE: InputProps<InputRangeProps> = {
  min: 0,
  max: 100,
};

const DEFAULT_PROPS_INPUT_TEXT: InputProps<InputTextProps> = {};

const FormField = function <FormContextType, CustomInputProps>(
  props: PropsWithChildren<
    InputProps<CustomInputProps> & FormFieldRequiredProps<FormContextType>
  >,
) {
  const {formFieldStyles, name, label, type, ...rest} = props;

  const resultStyles = useResultStylesheet<tFormFieldStylesheetType>({
    defaultStyles,
    styles: formFieldStyles,
  });

  const {handleChange, handleBlur, values, errors, warnings} =
    useFormContext<FormContextType>();

  const currentValue = values[name];
  const currentError = errors[name];
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
      const fieldProps = Object.assign({}, DEFAULT_PROPS_INPUT_TEXT, rest);
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
      const fieldProps = Object.assign({}, DEFAULT_PROPS_INPUT_TEXT, rest);
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
      const fieldProps = Object.assign({}, DEFAULT_PROPS_INPUT_RANGE, rest);
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
        <FormFieldIssuesManager<FormContextType>
          name={name}
          styles={formFieldStyles}
        />
      </FieldLabel>
    )
  );
};

export default FormField;
