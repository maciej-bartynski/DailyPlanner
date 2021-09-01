import { StyleSheet, ViewProps, ViewStyle, TextStyle } from 'react-native';
import { eColors } from 'lib/styles/colors';

export interface iButtonActionRoundedBigStylesType {
    buttonActionRoundedBigStyles: ViewStyle,
    buttonActionRoundedBigStyles__label: TextStyle,
    buttonActionRoundedBigStyles__wrapper: ViewStyle,
}

const ButtonActionRoundedBigStyles: iButtonActionRoundedBigStylesType = StyleSheet.create({
    buttonActionRoundedBigStyles: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonActionRoundedBigStyles__wrapper: {
        width: 50,
        height: 50,
        backgroundColor: eColors.Secondary,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonActionRoundedBigStyles__label: {
        color: eColors.White,
        fontSize: 10,
        lineHeight: 11,
        textAlign: 'center'
    },
})

export default ButtonActionRoundedBigStyles