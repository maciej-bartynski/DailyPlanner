import React from 'react';
import {Text, GestureResponderEvent, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {eColors} from 'lib/styles/colors';

const onPressDefaultHandler = () => null;

const ButtonRounded: React.FC<{
  onPressHandler?: (event?: GestureResponderEvent) => unknown;
}> = ({onPressHandler = onPressDefaultHandler}) => {
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.button}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: eColors.secondaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    color: 'white',
  },
});

export default ButtonRounded;
