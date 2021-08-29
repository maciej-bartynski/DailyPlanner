import { StyleSheet } from "react-native";
import { eColors } from "lib/styles/colors";
import { fieldLabelTypoMixin, fieldMessageTypoMixin, inputTypoMixin } from "lib/styles/fonts";

const flexStart: 'flex-start' = 'flex-start';
const center: 'center' = 'center';
const row: 'row' = 'row';
const inputCommonStyles = {
    borderWidth: 1,
    minHeight: 50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 0,
    flexDirection: row,
    justifyContent: flexStart,
    alignItems: center,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    borderColor: eColors.Gray,
}

const textAreaCommonStyles = {
    ...inputCommonStyles,
    height: 100,
    alignItems: flexStart
}

const toolbarMessageCommonStyles = {
    flex: 1,
}

const BasicInputStyles = StyleSheet.create({
    basicInput: {

    },
    basicInput__fieldLabel: {
        color: eColors.Gray,
        ...fieldLabelTypoMixin
    },
    basicInput__pressable: {
        ...inputCommonStyles,
    },
    basicInput__pressableTextArea: {
        ...textAreaCommonStyles,
    },
    basicInput__pressableText: {
        color: eColors.Primary,
        ...inputTypoMixin
    },
    basicInput__fieldMessageWarning: {
        color: eColors.Warning,
        ...fieldMessageTypoMixin,
        ...toolbarMessageCommonStyles
    },
    basicInput__fieldMessageError: {
        color: eColors.Error,
        ...fieldMessageTypoMixin,
        ...toolbarMessageCommonStyles
    },
    basicInput__modal: {

    },
    basicInput__textInputWrapper: {
        flex: 1,
        padding: 20,
    },
    basicInput__textInput: {
        color: eColors.Primary,
        ...inputTypoMixin,
        textAlignVertical: 'top',
    },
    basicInput__buttonAccept: {
        padding: 10,
        backgroundColor: eColors.Primary,
        borderRadius: 10,
    },
    basicInput__buttonAcceptLabel: {
        color: eColors.White
    },
    basicInput__toolbarWrapper: {
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: eColors.Secondary
    }
})

export default BasicInputStyles