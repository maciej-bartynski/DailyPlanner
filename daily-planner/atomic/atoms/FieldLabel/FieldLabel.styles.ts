import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';

export interface iFormFieldLabelStylesheet {
  fieldWrapper: StyleProp<ViewStyle>;
  fieldLabel: StyleProp<TextStyle>;
}

const defaultStyles: iFormFieldLabelStylesheet = StyleSheet.create({
  fieldWrapper: {
    width: '100%',
  },
  fieldLabel: {
    ...mixins.label,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 15,
  },
});

export default defaultStyles;
