import {eFieldType} from 'lib/enums/forms';
import {FormikContextType} from 'formik';
import {InputRangeProps} from '../InputValueSlider/InputValueSlider';
import {InputTextProps} from '../InputText/InputText';
import {InputMultiselectProps} from '../InputMultiselect/InputMultiselect';

export enum eFieldVariant {
  Naked = 'Naked',
  Full = 'Full',
}
export type FormFieldRequiredProps<FormContextType> = {
  name: keyof FormikContextType<FormContextType>['values'];
  label: string;
  type: eFieldType;
  variant?: eFieldVariant;
};

export type InputProps<CurrentInputProps> = Omit<
  CurrentInputProps,
  | 'onValueChange'
  | 'onChangeText'
  | 'value'
  | 'selectedOptions'
  | 'onBlur'
  | 'onFocus'
  | 'focused'
>;

export const DEFAULT_PROPS_INPUT_RANGE: InputProps<InputRangeProps> = {
  min: 0,
  max: 100,
};

export const DEFAULT_PROPS_INPUT_TEXT: InputProps<InputTextProps> = {};

export const DEFAULT_PROPS_MULTISELECT: InputProps<InputMultiselectProps> = {
  options: [],
};
