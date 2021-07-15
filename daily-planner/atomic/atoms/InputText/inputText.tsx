import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {eColors} from 'lib/styles/colors';
import {mixins} from 'lib/styles/fonts';

export type InputTextProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  value: string;
  borderColor?: string;
};

export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  borderColor,
}) => {
  const additionalStyle: Record<string, string> = {};
  if (borderColor) {
    additionalStyle.borderColor = borderColor;
  }
  return (
    <TextInput
      style={[styles.input, additionalStyle]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: eColors.secondaryDark,
    borderRadius: 10,
    padding: 10,
    ...mixins.input,
  },
  wrapper: {},
  error: {
    ...mixins.input,
    marginBottom: 10,
    marginLeft: 10,
    color: eColors.warning,
  },
  label: {
    ...mixins.label,
    marginBottom: 10,
    marginLeft: 10,
  },
});
