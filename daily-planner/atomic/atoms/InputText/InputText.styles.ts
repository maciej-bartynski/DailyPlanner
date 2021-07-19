import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {eColors} from 'lib/styles/colors';
import {mixins} from 'lib/styles/fonts';

export interface iInputTextStyleSheet {
    input: StyleProp<ViewStyle>
}

const defaultStyles:iInputTextStyleSheet = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: eColors.secondaryDark,
    borderRadius: 10,
    padding: 10,
    ...mixins.input,
  },
});

export default defaultStyles;
