import { StyleSheet } from "react-native";
import { eColors } from "lib/styles/colors";
import { paragraphTypoMixin, titleTypoMixin } from "lib/styles/fonts";

const TextWithIconStyles = StyleSheet.create({
    textWithIcon: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textWithIcon__text: {
        flex: 1,
        paddingRight: 5,
        ...titleTypoMixin
    },
    textWithIcon__iconWrapper:{
        width: 40,
        height: 40,
        backgroundColor: eColors.Primary,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 5,
    },
    textWithIcon__icon: {
        width: 40,
        height: 40,
    }
})

export default TextWithIconStyles;