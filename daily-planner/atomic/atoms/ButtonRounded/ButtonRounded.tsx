import React from 'react';
import {Text, GestureResponderEvent} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import buttonRoundedStyles from './ButtonRounded.styles';

const onPressDefaultHandler = () => null;

type Props = {
  onPressHandler?: (event?: GestureResponderEvent) => unknown;
};

const ButtonRounded: React.FC<Props> = ({
  onPressHandler = onPressDefaultHandler,
}) => (
  <TouchableOpacity onPress={onPressHandler} style={buttonRoundedStyles.button}>
    <Text style={buttonRoundedStyles.text}>+</Text>
  </TouchableOpacity>
);

export default ButtonRounded;
