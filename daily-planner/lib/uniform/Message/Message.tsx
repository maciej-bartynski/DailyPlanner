import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import {iMessageStyleSheet} from './Message.styles';
import defaultStyles from './Message.styles';
import {useFormContext} from 'lib/uniform/Form/config';
import useFieldContext from '../Field/fieldContext';

type Props<FormContextType> = PropsWithChildren<{
  name: keyof FormContextType;
  styles?: Partial<iMessageStyleSheet>;
  error: string,
  warning: string,
}>;

const Message = function <FormContextType>({
  name,
  styles,
  error,
  warning,
}: Props<FormContextType>) {
  
  const resultStyles = useResultStylesheet<iMessageStyleSheet>({
    defaultStyles,
    styles,
  });

  

  return (
    <View style={resultStyles.fieldIssues}>
      {error ? (
        <Text style={resultStyles.fieldError}>{error}</Text>
      ) : null}
      {!error && warning ? (
        <Text style={resultStyles.fieldWarning}>{warning}</Text>
      ) : null}
    </View>
  );
};

export default Message;
