import {StyleSheet} from 'react-native';
import {eColors} from 'lib/styles/colors';

const OptionStyle = StyleSheet.create({
  input__option: {},
  input__optionLabel: {},
  input__optionLabelSelected: {
    color: eColors.Blue,
  },
  input__optionButton: {
    paddingVertical: 15,
    backgroundColor: eColors.White,
    flexDirection: 'row',
  },
  input__optionButtonInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: eColors.Blue,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input__optionButtonInnerIcon: {
    color: eColors.White,
    transform: [{rotate: '45deg'}],
  },
});

export default OptionStyle;
