import React, {RefObject, useEffect} from 'react';
import {TextInput} from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import {iInputTextStyleSheet} from './InputText.styles';
import defaultStyles from './InputText.styles';

export type InputTextProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  value: string;
  styles?: Partial<iInputTextStyleSheet>;
};

const InputText = React.forwardRef<TextInput, InputTextProps>(
  (
    {placeholder, onChangeText, onBlur, onFocus, value, styles},
    inputReference,
  ) => {
    const resultStyles = useResultStylesheet<iInputTextStyleSheet>({
      defaultStyles,
      styles,
    });

    return (
      <TextInput
        ref={inputReference}
        onFocus={onFocus}
        style={resultStyles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    );
  },
);

export default InputText;
