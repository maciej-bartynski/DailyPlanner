import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';

export interface iInputTextAreaStylesheet {
  input: StyleProp<ViewStyle>;
}

const defaultStyles: iInputTextAreaStylesheet = StyleSheet.create({
  input: {
    padding: 10,
    ...mixins.input,
  },
});

export default defaultStyles;
