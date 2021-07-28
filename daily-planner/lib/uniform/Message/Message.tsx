import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import {iMessageStyleSheet} from './Message.styles';
import defaultStyles from './Message.styles';
import {useFormContext} from 'lib/uniform/Form/config';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormContextType;
  styles?: Partial<iMessageStyleSheet>;
}>;

const Message = function <FormContextType>({
  name,
  styles,
}: Props<FormContextType>) {
  const resultStyles = useResultStylesheet<iMessageStyleSheet>({
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

export default Message;
