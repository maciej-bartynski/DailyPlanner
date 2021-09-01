import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonActionRoundedSmallStyles from './ButtonActionRoundedSmall.styles';
import { iButtonActionRoundedBigStylesType } from '../ButtonActionRoundedBig/ButtonActionRoundedBig.styles';
import ButtonActionRoundedBig from '../ButtonActionRoundedBig';

type Props = {
  onPress: () => void;
  label: string
};

const ButtonActionRoundedSmall: React.FC<Props> = ({
  onPress,
  label
}) => (
    <ButtonActionRoundedBig
      label={label}
      onPress={onPress}
      styles={ButtonActionRoundedSmallStyles}
    />
  )
  
export default ButtonActionRoundedSmall;
