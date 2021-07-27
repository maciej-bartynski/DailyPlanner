import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import {tFormFieldIssueManagerStylesheetType} from './FormFieldIssuesBorder.styles';
import defaultStyles from './FormFieldIssuesBorder.styles';
import {useFormContext} from 'components/Form/config';
import {eColors} from 'lib/styles/colors';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormContextType;
  styles?: Partial<tFormFieldIssueManagerStylesheetType>;
}>;

const FormFieldIssuesBorder = function <FormContextType>({
  name,
  styles,
  children,
}: Props<FormContextType>) {
  const resultStyles =
    useResultStylesheet<tFormFieldIssueManagerStylesheetType>({
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

export default FormFieldIssuesBorder;
