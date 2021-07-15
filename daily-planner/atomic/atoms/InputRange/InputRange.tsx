import React, { useRef } from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {eColors} from 'lib/styles/colors';
import styles from './InputRange.styles';

export type InputRangeProps = {
  label?: string;
  min: number;
  max: number;
  value: number;
  onValueChange: (arg: string) => void;
  borderColor?: string;
};

const InputRange: React.FC<InputRangeProps> = ({
  label,
  min,
  max,
  value,
  onValueChange,
  borderColor,
}) => {
  const additionalStyle: Record<string, string> = {};
  if (borderColor) {
    additionalStyle.borderColor = borderColor;
  }

  return (
    <View style={[styles.wrapper, additionalStyle]}>
      {label ? (
        <Text style={styles.label}>
          {label}: {value}
        </Text>
      ) : (
        <Text style={styles.label}>{value}</Text>
      )}
      <Slider
        style={styles.slider}
        value={+useRef(value).current}
        minimumValue={min}
        maximumValue={max}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor={eColors.primaryDark}
        step={1}
        onValueChange={(arg: number) => {
          onValueChange('' + arg);
        }}
      />
    </View>
  );
};

export default InputRange;
