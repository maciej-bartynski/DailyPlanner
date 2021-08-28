import { StyleSheet } from "react-native";
import { eColors } from "lib/styles/colors";
import { paragraphTypoMixin, labelTypoMixin } from "lib/styles/fonts";

const TextWithBulletStyles = StyleSheet.create({
    textWithBullet: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textWithBullet__bullet: {
        marginRight: 3,
        marginTop: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: eColors.Primary
    },
    textWithBullet__label: {
        marginRight: 5,
        ...labelTypoMixin,
        color: eColors.Primary
    },
    textWithBullet__content:{
        ...paragraphTypoMixin,
        color: eColors.Gray
    }
})

export default TextWithBulletStyles