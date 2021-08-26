import { StyleSheet } from "react-native";
import { eColors } from "lib/styles/colors";

const CardIconStyles = StyleSheet.create({
    wrapper: {
        width: 40,
        height: 40,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: eColors.Primary,
        marginBottom: 60,
        marginRight: 5
    },
    image: {
        width: 40,
        height: 40,
    }
})

export default CardIconStyles;