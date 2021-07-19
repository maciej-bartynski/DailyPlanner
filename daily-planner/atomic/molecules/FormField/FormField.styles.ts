import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';
import {eColors} from 'lib/styles/colors';

export interface tFormFieldStylesheetType {
  fieldWrapper: StyleProp<ViewStyle>;
  fieldLabel: StyleProp<ViewStyle>;
  fieldError: StyleProp<ViewStyle>;
  fieldWarning: StyleProp<ViewStyle>;
}

const styles: tFormFieldStylesheetType = StyleSheet.create({
  fieldWrapper: {
    width: '100%',
  },
  fieldLabel: {
    ...mixins.label,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 15,
  },
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

export default styles;
