import React from 'react';
import {TextInput} from 'react-native';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import defaultStyles, {iInputTextAreaStylesheet} from './InputTextArea.styles';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';

export type InputAreaProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  numberOfLines?: number;
  styles?: Partial<iInputTextAreaStylesheet>;
};

const InputTextArea: React.FC<InputAreaProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  numberOfLines = 10,
  styles,
}) => {
  const resultStyles = useResultStylesheet({
    defaultStyles,
    styles,
  });
  return (
    <TextInput
      style={resultStyles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      numberOfLines={numberOfLines}
      multiline={true}
    />
  );
};

export default InputTextArea;
