import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';

export interface iLabelStylesheet {
  fieldWrapper: StyleProp<ViewStyle>;
  fieldLabel: StyleProp<TextStyle>;
}

const defaultStyles: iLabelStylesheet = StyleSheet.create({
  fieldWrapper: {
    width: '100%',
    flex: 1,
  },
  fieldLabel: {
    ...mixins.label,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 15,
    flex: 1,
  },
});

export default defaultStyles;
