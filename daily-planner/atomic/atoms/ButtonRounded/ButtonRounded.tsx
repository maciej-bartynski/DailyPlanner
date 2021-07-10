import React from 'react';
import {Text, GestureResponderEvent} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import buttonRoundedStyles from './ButtonRounded.styles';

const onPressDefaultHandler = () => null;

const ButtonRounded: React.FC<{
  onPressHandler?: (event?: GestureResponderEvent) => unknown;
}> = ({onPressHandler = onPressDefaultHandler}) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={buttonRoundedStyles.button}>
      <Text style={buttonRoundedStyles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default ButtonRounded;
