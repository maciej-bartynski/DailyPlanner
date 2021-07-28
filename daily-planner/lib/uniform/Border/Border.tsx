import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import {iBorderStyleSheet} from './Border.styles';
import defaultStyles from './Border.styles';
import {useFormContext} from 'lib/uniform/Form/config';
import {eColors} from 'lib/styles/colors';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormContextType;
  styles?: Partial<iBorderStyleSheet>;
}>;

const Border = function <FormContextType>({
  name,
  styles,
  children,
}: Props<FormContextType>) {
  const resultStyles = useResultStylesheet<iBorderStyleSheet>({
    defaultStyles,
    styles,
  });

  const {errors, warnings} = useFormContext<FormContextType>();
  const isCurrentError = !!errors[name];
  const isCurrentWarning = !!warnings[name];

  const borderColor = isCurrentError
    ? eColors.Error
    : isCurrentWarning
    ? eColors.Warning
    : eColors.Primary;

  return (
    <View style={[resultStyles.fieldBorder, {borderColor}]}>{children}</View>
  );
};

export default Border;
