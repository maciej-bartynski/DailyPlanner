import {eFieldType} from 'lib/enums/forms';
import {FormikContextType} from 'formik';
import {InputRangeProps} from '../InputValueSlider/InputValueSlider';
import {InputTextProps} from '../InputText/InputText';

export type FormFieldRequiredProps<FormContextType> = {
  name: keyof FormikContextType<FormContextType>['values'];
  label: string;
  type: eFieldType;
};

export type InputProps<CurrentInputProps> = Omit<
  CurrentInputProps,
  'onValueChange' | 'onChangeText' | 'value'
>;

export const DEFAULT_PROPS_INPUT_RANGE: InputProps<InputRangeProps> = {
  min: 0,
  max: 100,
};

export const DEFAULT_PROPS_INPUT_TEXT: InputProps<InputTextProps> = {};
