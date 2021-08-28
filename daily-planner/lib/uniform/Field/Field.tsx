import React, {
  PropsWithChildren,
  useMemo,
  useCallback,
} from 'react';
import { useFormContext } from 'lib/uniform/Form/config';
import { InputProps, FormFieldRequiredProps, eFieldVariant } from './config';
import inputSelector from './inputSelector';
import FieldWrapper from '../FieldWrapper/FieldWrapper';
import FieldModal from '../FieldModal';
import { FieldContext } from './fieldContext';
import { FormikContextType, FormikErrors } from 'formik';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormikContextType<FormContextType>['values'];
  children: (arg: {
    value: FormContextType[keyof FormContextType];
    error: string;
    warning: string;
    onBlurHandler: keyof FormContextType extends string ? (e: any) => void : void;
    onChangeHandler: (e: string) => void;
  }) => JSX.Element
}>;

const FormField = function <FormContextType>(
  props: Props<FormContextType>,
) {

  const {
    name,
    children,
  } = props;

  const {
    handleChange,
    handleBlur,
    values,
    errors,
    warnings
  } = useFormContext<FormContextType>();

  const value = values[name];
  const error = errors[name];
  const warning = warnings ? warnings[name] : '';

  const onChangeHandler = useMemo(
    () => handleChange(name),
    [name, handleChange],
  );

  const onBlurHandler = useMemo(
    () => handleBlur(name),
    [handleBlur, name],
  );

  const memoized = useMemo(() => ({
    value,
    error: error as string,
    warning: warning as string,
    onBlurHandler,
    onChangeHandler,
  }), [
    value,
    error,
    warning,
    onBlurHandler,
    onChangeHandler,
  ]);

  return <>{children(memoized)}</>
};

export default FormField;
