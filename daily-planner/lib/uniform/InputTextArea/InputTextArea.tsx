import React, { useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import defaultStyles, { iInputTextAreaStylesheet } from './InputTextArea.styles';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';

export type InputAreaProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: any) => void;
  value: string;
  numberOfLines?: number;
  styles?: Partial<iInputTextAreaStylesheet>;
};

const InputTextArea = React.forwardRef<TextInput, InputAreaProps>(({
  placeholder,
  onChangeText,
  onBlur,
  onFocus,
  value,
  numberOfLines = 10,
  styles,
}, inputReference) => {
  const resultStyles = useResultStylesheet({
    defaultStyles,
    styles,
  });

  return (
    <TextInput
      ref={inputReference}
      style={resultStyles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      numberOfLines={numberOfLines}
      multiline={true}
    />
  );
});

export default InputTextArea;
