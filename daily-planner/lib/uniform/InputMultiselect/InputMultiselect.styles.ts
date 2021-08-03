import {StyleSheet} from 'react-native';
import {shadowMain} from 'lib/styles/shadow';
import {eColors} from 'lib/styles/colors';

const InputMultiselectStyles = StyleSheet.create({
  input__input: {
    padding: 0,
  },
  input__optionsContainer: {
    ...shadowMain,
    borderRadius: 20,
    padding: 20,
    backgroundColor: eColors.White,
    marginHorizontal: 5,
  },
  input__inputInner: {
    height: 60,
  },
  input__results: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input__optionsScrollView: {},
  input__options: {},
});

export default InputMultiselectStyles;
