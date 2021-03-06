import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';
import {eColors} from 'lib/styles/colors';

export interface iMessageStyleSheet {
  fieldError: StyleProp<ViewStyle>;
  fieldWarning: StyleProp<ViewStyle>;
  fieldIssues: StyleProp<ViewStyle>;
}

const defaultStyles: iMessageStyleSheet = StyleSheet.create({
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
  fieldIssues: {
    height: 30,
  },
});

export default defaultStyles;
