import { StyleSheet } from 'react-native';
import { eColors } from 'lib/styles/colors';
import { iButtonActionRoundedBigStylesType } from '../ButtonActionRoundedBig/ButtonActionRoundedBig.styles';

const ButtonActionRoundedSmallStyles: iButtonActionRoundedBigStylesType = StyleSheet.create({
    buttonActionRoundedBigStyles__wrapper: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: eColors.Secondary,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonActionRoundedBigStyles: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonActionRoundedBigStyles__label: {
        color: eColors.Secondary,
        fontSize: 8,
        lineHeight: 8,
    },
})

export default ButtonActionRoundedSmallStyles