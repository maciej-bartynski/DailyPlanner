import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { eColors } from 'lib/styles/colors';
import defaultStyles, { iInputRangeStylesheet } from './InputValueSlider.styles';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import { eFormIssueSeverity } from '../types';
import BasicInputStyles from '../BasicInput/BasicInput.styles';

export type InputRangeProps = {
  label?: string;
  min: number;
  max: number;
  value: number;
  unit?: string;
  onChange: (arg: number) => void;
  styles?: Partial<iInputRangeStylesheet>;
  message: string,
  messageSeverity: eFormIssueSeverity
};

const InputValueSlider: React.FC<InputRangeProps> = ({
  unit,
  min,
  max,
  value,
  onChange,
  styles,
  label,
  message,
  messageSeverity
}) => {
  const numericValue = +value;
  const resultStyles = useResultStylesheet<iInputRangeStylesheet>({
    defaultStyles,
    styles,
  });

  const fieldMessageColorClass = messageSeverity === eFormIssueSeverity.Error
    ? BasicInputStyles.basicInput__fieldMessageError
    : BasicInputStyles.basicInput__fieldMessageWarning;

  return (
    <>
      <Text style={BasicInputStyles.basicInput__fieldLabel}>
        {label}
      </Text>
      <View style={resultStyles.input}>
        <Text style={resultStyles.input__value}>
          {value} {unit}
        </Text>
        <Text numberOfLines={1} style={resultStyles.input__minLabel}>
          {min}
        </Text>
        <Slider
          style={resultStyles.input__slider}
          value={+useRef(numericValue).current}
          minimumValue={min}
          maximumValue={max}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor={eColors.primaryDark}
          step={1}
          onValueChange={onChange}
        />
        <Text numberOfLines={1} style={resultStyles.input__maxLabel}>
          {max}
        </Text>
      </View>
      <Text style={fieldMessageColorClass}>
        {message}
      </Text>
    </>
  );
};

export default InputValueSlider;
