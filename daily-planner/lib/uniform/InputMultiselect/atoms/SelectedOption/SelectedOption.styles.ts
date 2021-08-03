import {StyleSheet} from 'react-native';
import {eColors} from 'lib/styles/colors';
import {shadowMain} from 'lib/styles/shadow';

const SelectedOptionStyle = StyleSheet.create({
  input__selectedOption: {
    backgroundColor: eColors.White,
    padding: 5,
    paddingLeft: 15,
    borderRadius: 10,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadowMain,
    marginLeft: 5,
    marginTop: 5,
  },
  input__selectedOptionLabel: {
    color: eColors.Gray,
  },
  input__selectedOptionButton: {
    backgroundColor: eColors.Gray,
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  input__selectedOptionButtonInnerIcon: {
    color: eColors.White,
    fontSize: 26,
    transform: [{rotate: '45deg'}],
  },
});

export default SelectedOptionStyle;
