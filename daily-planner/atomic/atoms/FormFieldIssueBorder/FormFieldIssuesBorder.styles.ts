import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {eColors} from 'lib/styles/colors';

export interface tFormFieldIssueManagerStylesheetType {
  fieldBorder: StyleProp<ViewStyle>;
}

const defaultStyles: tFormFieldIssueManagerStylesheetType = StyleSheet.create({
  fieldBorder: {
    borderWidth: 1,
    borderColor: eColors.secondaryDark,
    borderRadius: 10,
    padding: 10,
  },
});

export default defaultStyles;
