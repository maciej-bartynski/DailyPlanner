import {tFormFieldStylesheetType} from 'lib/uniform/Field/Field.styles';
import {StyleSheet} from 'react-native';

const formFieldStyles: Partial<tFormFieldStylesheetType> = StyleSheet.create({
  fieldLabel: {display: 'none'},
  fieldError: {display: 'none'},
  fieldWrapper: {padding: 0, margin: 0},
  fieldWarning: {display: 'none'},
  fieldIssues: {display: 'none'},
});

export default formFieldStyles;
