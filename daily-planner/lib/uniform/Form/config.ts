import { PropsWithChildren, createContext, useContext } from 'react';
import { FormikContextType } from 'formik';

export type tMessagesManager<FormType> = (values: FormType) =>
  ((Partial<Record<keyof FormType, string>>) | (Promise<Partial<Record<keyof FormType, string>>>));

export type tFormProps<FormType> = PropsWithChildren<{
  initialValues: FormType;
  validation?: tMessagesManager<FormType>;
  warning?: tMessagesManager<FormType>;
  onSubmit: (
    values: FormType,
  ) => void | Promise<void>;
}>;

export type iFormContext<FormType> = {
  warnings: Partial<Record<keyof FormType, string>>;
  errors:Partial<Record<keyof FormType, string>>;
  values: FormType;
  handleBlur: (e:string) => (e: any) => void;
  handleChange: (e:string) => (e: string) => void;
}

export const FormContext = createContext<unknown>({});

export function getFormContext<ContextType>() {
  return FormContext as React.Context<ContextType>;
}

export function useFormContext<FormType>() {
  return useContext<iFormContext<FormType>>(
    getFormContext<iFormContext<FormType>>(),
  );
}
