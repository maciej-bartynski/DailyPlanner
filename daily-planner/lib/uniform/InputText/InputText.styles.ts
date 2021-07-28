import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';

export interface iInputTextStyleSheet {
  input: StyleProp<ViewStyle>;
}

const defaultStyles: iInputTextStyleSheet = StyleSheet.create({
  input: {
    height: 60,
    padding: 10,
    ...mixins.input,
  },
});

export default defaultStyles;
