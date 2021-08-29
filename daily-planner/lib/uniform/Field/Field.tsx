import React, {
  PropsWithChildren,
  useMemo,
  useCallback,
} from 'react';
import { useFormContext, FormContext } from 'lib/uniform/Form/config';
import { eFormIssueSeverity } from '../types';

type Props<FormContextType extends Record<string, unknown>, ValueType extends keyof FormContextType> = PropsWithChildren<{
  name: keyof FormContextType;
  children: (arg: {
    value: FormContextType[ValueType];
    error: string;
    warning: string;
    onBlur: (e: any) => void;
    onChange: (e: FormContextType[ValueType]) => void;
    message: string,
    severity: eFormIssueSeverity,
    onNumericChangeHandler: (e: number) => void;
    numericValue: number
  }) => JSX.Element
}>;

const FormField = function <
  FormContextType extends Record<keyof FormContextType, unknown>, 
  ValueType extends keyof FormContextType
>(
  props: Props<FormContextType, ValueType>,
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
  const error = errors[name] as string;
  const warning = warnings ? warnings[name] as string : '';
  const message = error || warning || '';
  const severity: eFormIssueSeverity = error
    ? eFormIssueSeverity.Error
    : warning
      ? eFormIssueSeverity.Warning
      : eFormIssueSeverity.None;

  const onChangeHandler = useMemo(
    () => handleChange(name as string),
    [name, handleChange],
  );

  const onNumericChangeHandler = useCallback(
    (e:number) => onChangeHandler(`${e}`),
    [onChangeHandler],
  );

  const onBlurHandler = useMemo(
    () => handleBlur
      ? handleBlur(name as string)
      : (() => { }),
    [handleBlur, name],
  );

  const memoized = useMemo(() => ({
    value: value as FormContextType[ValueType],
    numericValue: +value,
    error: error as string,
    warning: warning as string,
    message,
    severity,
    onBlur: onBlurHandler as (e: any) => void,
    onChange: onChangeHandler as unknown as (e: FormContextType[ValueType]) => void,
    onNumericChangeHandler
  }), [
    value,
    error,
    warning,
    onBlurHandler,
    onChangeHandler,
    onNumericChangeHandler,
    message,
    severity
  ]);

  return <>{children(memoized)}</>
};

export default FormField;
