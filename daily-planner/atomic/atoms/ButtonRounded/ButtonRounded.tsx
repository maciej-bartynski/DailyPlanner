import React from 'react';
import { Text, GestureResponderEvent, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import buttonRoundedStyles from './ButtonRounded.styles';

const onPressDefaultHandler = () => null;

export enum eButtonVariant {
  Add = 'Add',
  Close = 'Close'
}

type Props = {
  onPressHandler?: (event?: GestureResponderEvent) => unknown;
  variant?: eButtonVariant
};

const ButtonRounded: React.FC<Props> = ({
  onPressHandler = onPressDefaultHandler,
  variant = eButtonVariant.Add
}) => {
  const wrapperClassName = variant === eButtonVariant.Add
    ? buttonRoundedStyles.button
    : buttonRoundedStyles.buttonCross;

  const className = variant === eButtonVariant.Add
    ? buttonRoundedStyles.text
    : buttonRoundedStyles.cross;
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={buttonRoundedStyles.touchableWrapper}
    >
      <View style={wrapperClassName}>
        <Text style={className}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ButtonRounded;
