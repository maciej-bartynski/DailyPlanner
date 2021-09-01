import {StyleSheet} from 'react-native';
import {eColors} from 'lib/styles/colors';
import {shadowMain} from 'lib/styles/shadow';

const buttonRoundedStyles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: eColors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    ...shadowMain,
  },
  buttonCross: {
    width: 25,
    height: 25,
    backgroundColor: eColors.White,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    ...shadowMain,
  },
  text: {
    color: eColors.White,
  },
  cross:{
    color: eColors.Primary,
    transform: [
      { rotate: '45deg' }
    ]
  },
  touchableWrapper: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default buttonRoundedStyles;
