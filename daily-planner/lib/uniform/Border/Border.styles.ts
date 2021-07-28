import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {eColors} from 'lib/styles/colors';

export interface iBorderStyleSheet {
  fieldBorder: StyleProp<ViewStyle>;
}

const defaultStyles: iBorderStyleSheet = StyleSheet.create({
  fieldBorder: {
    borderWidth: 1,
    borderColor: eColors.secondaryDark,
    borderRadius: 10,
  },
});

export default defaultStyles;
