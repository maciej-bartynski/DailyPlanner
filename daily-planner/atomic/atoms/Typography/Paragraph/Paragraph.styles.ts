import { StyleSheet, TextStyle } from "react-native";
import { paragraphTypoMixin } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors";

export interface iParagraphStyles {
    paragraph: TextStyle
}
const ParagraphStyles: iParagraphStyles = StyleSheet.create({
    paragraph: {
        ...paragraphTypoMixin,
        color: eColors.Gray,
    }
})

export default ParagraphStyles;