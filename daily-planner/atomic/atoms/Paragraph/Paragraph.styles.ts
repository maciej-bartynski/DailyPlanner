import { StyleSheet } from "react-native";
import { paragraphTypoMixin } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors";

const ParagraphStyles = StyleSheet.create({
    paragraph: {
        ...paragraphTypoMixin,
        color: eColors.Gray,
    }
})

export default ParagraphStyles;