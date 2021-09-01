import { StyleSheet } from "react-native";
import { paragraphTypoMixin, eFontWeight } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors";

const ParagraphStressedStyles = StyleSheet.create({
    paragraph: {
        ...paragraphTypoMixin,
        color: eColors.Black,
        fontWeight: eFontWeight.black
    }
})

export default ParagraphStressedStyles;