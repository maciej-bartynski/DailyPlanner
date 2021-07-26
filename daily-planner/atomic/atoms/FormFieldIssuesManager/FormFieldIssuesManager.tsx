import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {useFormikContext} from 'formik';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import useWarnings from 'atomic/molecules/FormField/useWarning';
import {tFormFieldIssueManagerStylesheetType} from './FormFieldIssuesManager.styles';
import defaultStyles from './FormFieldIssuesManager.styles';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormContextType;
  styles?: Partial<tFormFieldIssueManagerStylesheetType>;
  formWarningManager: (
    values: FormContextType,
  ) => Promise<Partial<Record<keyof FormContextType, string>>>;
}>;

const FormFieldIssuesManager = function <FormContextType>({
  name,
  formWarningManager,
  styles,
}: Props<FormContextType>) {
  const resultStyles =
    useResultStylesheet<tFormFieldIssueManagerStylesheetType>({
      defaultStyles,
      styles,
    });

  const {values, errors} = useFormikContext<FormContextType>();

  const currentError = errors[name];
  const warnings = useWarnings<FormContextType>(values, formWarningManager);
  const currentWarning = warnings ? warnings[name] : '';

  return (
    <>
      {currentError ? (
        <Text style={resultStyles.fieldError}>{currentError}</Text>
      ) : null}
      {!currentError && currentWarning ? (
        <Text style={resultStyles.fieldWarning}>{currentWarning}</Text>
      ) : null}
    </>
  );
};

export default FormFieldIssuesManager;
