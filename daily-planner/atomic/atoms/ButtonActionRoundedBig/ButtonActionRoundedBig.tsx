import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ButtonActionRoundedBigStyles, { iButtonActionRoundedBigStylesType } from './ButtonActionRoundedBig.styles';

type Props = {
  onPress: () => void;
  label: string,
  styles?: iButtonActionRoundedBigStylesType
};

const ButtonActionRoundedBig: React.FC<Props> = ({
  onPress,
  label,
  styles = ButtonActionRoundedBigStyles
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonActionRoundedBigStyles}
    >
      <View style={styles.buttonActionRoundedBigStyles__wrapper}>
        <Text style={styles.buttonActionRoundedBigStyles__label}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default ButtonActionRoundedBig;
