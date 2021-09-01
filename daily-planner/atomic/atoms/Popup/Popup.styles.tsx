import { StyleSheet } from "react-native";
import { eColors } from "lib/styles/colors";

const PopupStyle = StyleSheet.create({
    popup__background: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    popup__modal:{
        backgroundColor: eColors.White,
        width: "90%",
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    popup__pressable: {
        position:'absolute',
        top: 0, 
        left: 0,
        width: '100%',
        height: '100%'
    }
})

export default PopupStyle;