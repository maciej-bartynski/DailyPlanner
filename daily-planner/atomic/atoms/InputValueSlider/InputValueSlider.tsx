import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { eColors } from 'lib/styles/colors';
import defaultStyles, { iInputRangeStylesheet } from './InputValueSlider.styles';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';

export type InputRangeProps = {
  label?: string;
  min: number;
  max: number;
  value: number;
  unit?: string,
  onValueChange: (arg: string) => void;
  borderColor?: string;
  styles?: Partial<iInputRangeStylesheet>
};

const InputValueSlider: React.FC<InputRangeProps> = ({
  unit,
  min,
  max,
  value,
  onValueChange,
  borderColor,
  styles
}) => {
  const resultStyles = useResultStylesheet<iInputRangeStylesheet>({ defaultStyles, styles })

  return (
    <View style={[resultStyles.input, borderColor?{borderColor}:null]}>
      <Text style={resultStyles.input__value}>{value} {unit}</Text>
      <Text numberOfLines={1} style={resultStyles.input__minLabel}>{min}</Text>
      <Slider
        style={resultStyles.input__slider}
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
      <Text numberOfLines={1} style={resultStyles.input__maxLabel}>{max}</Text>
    </View>
  );
};

export default InputValueSlider;
