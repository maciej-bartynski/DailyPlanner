import {StyleSheet} from 'react-native';
import {eColors} from 'lib/styles/colors';
import {shadowMain} from 'lib/styles/shadow';

const buttonRoundedStyles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: eColors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: eColors.White,
    borderWidth: 1,
    ...shadowMain,
  },
  text: {
    color: eColors.White,
  },
});

export default buttonRoundedStyles;
