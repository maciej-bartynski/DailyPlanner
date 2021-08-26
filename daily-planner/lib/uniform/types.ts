import { FormikContextType } from 'formik';

export type tFieldName<FormContextType> =
    keyof FormikContextType<FormContextType>['values'];

export type tFieldWarnings<FormContextType> = Record<tFieldName<FormContextType>, string>;
export type tFieldValues<FormContextType>= Record<tFieldName<FormContextType>, string>;

export enum eFieldType {
    TextInput = 'text-input',
    TextArea = 'text-area',
    ValueSlider = 'value-slider',
    Multiselect = 'multiselect',
}

export enum eFieldVariant {
    Naked = 'Naked',
    Full = 'Full',
    Modal = 'Modal'
}

export type FormFieldRequiredProps<FormContextType> = {
    name: tFieldName<FormContextType>;
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