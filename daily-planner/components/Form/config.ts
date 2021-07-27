import {PropsWithChildren, createContext, useContext} from 'react';
import {FormikContextType, FormikErrors} from 'formik';

export type tFormErrors<FormType> = FormikErrors<FormType>;

export type tFormProps<FormType extends {}> = PropsWithChildren<{
  initialValues: FormType;
  validation?: (
    values: FormikContextType<FormType>['values'],
  ) => tFormErrors<FormType> | Promise<tFormErrors<FormType>>;
  warning?: (
    values: FormikContextType<FormType>['values'],
  ) => tFormErrors<FormType> | Promise<tFormErrors<FormType>>;
  onSubmit: (
    values: FormikContextType<FormType>['values'],
  ) => void | Promise<void>;
}>;

export type tUseWarningParams<FormType> = {
  values: FormikContextType<FormType>['values'];
  warning: (
    values: FormikContextType<FormType>['values'],
  ) => tFormErrors<FormType> | Promise<tFormErrors<FormType>>;
};

export type iFormContext<FormType> = {
  warnings: tFormErrors<FormType>;
} & FormikContextType<FormType>;

export const FormContext = createContext<unknown>({});

export function getFormContext<ContextType>() {
  return FormContext as React.Context<ContextType>;
}

export function useFormContext<FormType>() {
  return useContext<iFormContext<FormType>>(
    getFormContext<iFormContext<FormType>>(),
  );
}
