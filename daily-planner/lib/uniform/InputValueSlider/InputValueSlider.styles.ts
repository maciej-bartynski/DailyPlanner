import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {mixins} from 'lib/styles/fonts';

export interface iInputRangeStylesheet {
  input: StyleProp<ViewStyle>;
  input__value: StyleProp<TextStyle>;
  input__minLabel: StyleProp<TextStyle>;
  input__maxLabel: StyleProp<TextStyle>;
  input__slider: StyleProp<ViewStyle>;
}

const styles: iInputRangeStylesheet = StyleSheet.create({
  input: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  input__value: {
    ...mixins.label,
    marginLeft: 10,
    width: '100%',
    textAlign: 'center',
  },
  input__minLabel: {
    ...mixins.label,
    flex: 0,
  },
  input__maxLabel: {
    ...mixins.label,
    flex: 0,
  },
  input__slider: {
    width: '100%',
    height: 40,
    flex: 1,
  },
});

export default styles;
