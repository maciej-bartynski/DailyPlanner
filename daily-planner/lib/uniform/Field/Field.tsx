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
import { FormikContextType } from 'formik';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormikContextType<FormContextType>['values'];
  children: (arg: any) => JSX.Element
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
    error,
    warning,
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
