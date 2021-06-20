import React from "react";
import { View, Text, GestureResponderEvent, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const onPressDefaultHandler = () => null;

const ButtonRounded : React.FC<{
    onPressHandler?: (event?: GestureResponderEvent) => unknown;
}> = ({
    onPressHandler = onPressDefaultHandler
}) => {
    return (
        <TouchableOpacity 
            onPress={onPressHandler}
            style={styles.button}
        >
            <Text style={styles.text}>
                +
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    },
    text: {
        color: "white"
    }
})

export default ButtonRounded