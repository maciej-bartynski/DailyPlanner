import React, { RefObject, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import { iInputTextStyleSheet } from './InputText.styles';
import defaultStyles from './InputText.styles';
import FieldLabel from '../Label';
import Message from '../Message';

export type InputTextProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  onFocus: (e: any) => void;
  value: string;
  label: string,
  error: string,
  warning: string,
  styles?: Partial<iInputTextStyleSheet>;
};

const InputText = React.forwardRef<TextInput, InputTextProps>(
  (
    {
      placeholder,
      onChangeText,
      onBlur,
      onFocus,
      value,
      styles,
      error,
      warning,
      label,
    },
    inputReference,
  ) => {

    const resultStyles = useResultStylesheet<iInputTextStyleSheet>({
      defaultStyles,
      styles,
    });

    return (
      <View>
        <FieldLabel label={label} />
        <TextInput
          ref={inputReference}
          onFocus={onFocus}
          style={resultStyles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        />
        <Message<FormContextType> />
      </View>
    );
  },
);

export default InputText;
