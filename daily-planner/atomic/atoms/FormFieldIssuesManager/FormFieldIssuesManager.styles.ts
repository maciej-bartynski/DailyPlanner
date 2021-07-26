import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';
import {eColors} from 'lib/styles/colors';

export interface tFormFieldIssueManagerStylesheetType {
  fieldError: StyleProp<ViewStyle>;
  fieldWarning: StyleProp<ViewStyle>;
}

const defaultStyles: tFormFieldIssueManagerStylesheetType = StyleSheet.create({
  fieldError: {
    ...mixins.input,
    marginBottom: 10,
    marginLeft: 10,
    color: eColors.Error,
  },
  fieldWarning: {
    ...mixins.input,
    marginBottom: 10,
    marginLeft: 10,
    color: eColors.Warning,
  },
});

export default defaultStyles;
