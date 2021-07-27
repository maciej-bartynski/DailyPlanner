import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import {tFormFieldIssueManagerStylesheetType} from './FormFieldIssuesManager.styles';
import defaultStyles from './FormFieldIssuesManager.styles';
import {useFormContext} from 'components/Form/config';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormContextType;
  styles?: Partial<tFormFieldIssueManagerStylesheetType>;
}>;

const FormFieldIssuesManager = function <FormContextType>({
  name,
  styles,
}: Props<FormContextType>) {
  const resultStyles =
    useResultStylesheet<tFormFieldIssueManagerStylesheetType>({
      defaultStyles,
      styles,
    });

  const {errors, warnings} = useFormContext<FormContextType>();
  const currentError = errors[name];
  const currentWarning = warnings ? warnings[name] : '';

  return (
    <View style={resultStyles.fieldIssues}>
      {currentError ? (
        <Text style={resultStyles.fieldError}>{currentError}</Text>
      ) : null}
      {!currentError && currentWarning ? (
        <Text style={resultStyles.fieldWarning}>{currentWarning}</Text>
      ) : null}
    </View>
  );
};

export default FormFieldIssuesManager;
