import {StyleSheet} from 'react-native';
import {mixins} from 'lib/styles/fonts';
import {eColors} from 'lib/styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  error: {
    ...mixins.input,
    marginBottom: 10,
    marginLeft: 10,
    color: eColors.Error,
  },
  warning: {
    ...mixins.input,
    marginBottom: 10,
    marginLeft: 10,
    color: eColors.Warning,
  },
  label: {
    ...mixins.label,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export type tFormFieldStylesheetType = typeof styles;
export default styles;
