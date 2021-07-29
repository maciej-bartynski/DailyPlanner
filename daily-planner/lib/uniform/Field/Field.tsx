import React, {PropsWithChildren, useMemo} from 'react';
import Label from 'lib/uniform/Label';
import Message from '../Message';
import {useFormContext} from 'lib/uniform/Form/config';
import {InputProps, FormFieldRequiredProps, eFieldVariant} from './config';
import Border from '../Border';
import inputSelector from './inputSelector';

type Props<FormContextType, CustomInputProps> = PropsWithChildren<
  InputProps<CustomInputProps> & FormFieldRequiredProps<FormContextType>
>;

const FormField = function <FormContextType, CustomInputProps>(
  props: Props<FormContextType, CustomInputProps>,
) {
  const {name, label, type, variant, ...rest} = props;

  const {handleChange, handleBlur, values} = useFormContext<FormContextType>();

  const currentValue = values[name];
  const onChangeHandler = useMemo(
    () => handleChange(name),
    [name, handleChange],
  );
  const onBlurHandler = useMemo(() => handleBlur(name), [name, handleBlur]);

  const currentInputElement = useMemo(
    () =>
      inputSelector<FormContextType, CustomInputProps, typeof rest>({
        type,
        currentValue,
        onChangeHandler,
        onBlurHandler,
        rest,
      }),
    [type, currentValue, onChangeHandler, onBlurHandler, rest],
  );

  if (variant === eFieldVariant.Naked) {
    return currentInputElement;
  }

  return (
    currentInputElement && (
      <Label label={label || ''}>
        <Border name={name}>{currentInputElement}</Border>
        <Message<FormContextType> name={name} />
      </Label>
    )
  );
};

export default FormField;
