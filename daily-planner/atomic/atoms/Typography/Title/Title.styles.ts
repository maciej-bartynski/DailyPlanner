import { StyleSheet } from "react-native";
import { paragraphTypoMixin, titleTypoMixin } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors";

const TitleStyles = StyleSheet.create({
    paragraph: {
        ...titleTypoMixin,
        color: eColors.Gray,
    }
})

export default TitleStyles;