import { StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { eColors } from "lib/styles/colors";
import { mixins } from "lib/styles/fonts";

export interface iInputRangeStylesheet {
  wrapper: StyleProp<ViewStyle>,
  label:  StyleProp<TextStyle>,
  input: StyleProp<ViewStyle>,
  input__value: StyleProp<TextStyle>,
  input__minLabel:StyleProp<TextStyle>,
  input__maxLabel: StyleProp<TextStyle>,
  input__slider:StyleProp<ViewStyle>,
}

const styles: iInputRangeStylesheet = StyleSheet.create({
  wrapper: {},
  label: {
    ...mixins.label,
  },
  input: {
    borderWidth: 1,
    borderColor: eColors.secondaryDark,
    borderRadius: 10,
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
  input__minLabel:{
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