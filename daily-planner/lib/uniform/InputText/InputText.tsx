import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import {iInputTextStyleSheet} from './InputText.styles';
import defaultStyles from './InputText.styles';

export type InputTextProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  value: string;
  styles?: Partial<iInputTextStyleSheet>;
};

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  styles,
}) => {
  const resultStyles = useResultStylesheet<iInputTextStyleSheet>({
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
    />
  );
};

export default InputText;
