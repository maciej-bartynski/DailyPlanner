import { StyleSheet } from "react-native";
import { eColors } from "lib/styles/colors";
import { mixins } from "lib/styles/fonts";

const styles = StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      borderColor: eColors.secondaryDark,
      borderRadius: 10,
      padding: 10,
    },
    label: {
      ...mixins.label,
      marginBottom: 10,
      marginLeft: 10,
    },
    slider: {
      width: '100%',
      height: 40,
    },
  });

  export default styles;