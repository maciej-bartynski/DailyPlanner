import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View, StyleSheet, GestureResponderEvent, Text } from "react-native";
import ButtonRounded from "atomic/atoms/ButtonRounded";
import { eColors } from "lib/styles/colors";
import TemplateMessageManager from "atomic/molecules/TemplateMessageManager";
import navigationRef from "lib/navigation/reference";
import { TouchableOpacity } from "react-native-gesture-handler";
import { mixins } from "lib/styles/fonts";

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        flexDirection: "row",
        backgroundColor: eColors.secondary,
        height: 70,
        alignItems:"center",
        paddingLeft: 20,
    },
    title: {
        flex: 1,
        ...mixins.title,
        color: eColors.textOnPrimary
    },
    button: {
        width: 70,
        height: 70,
        backgroundColor: eColors.primaryAccent,
        alignItems: "center",
        justifyContent: "center"
    },
})

const ModalBasicTemplate: React.FC<{
    bgColor?: string,
    title?: string
}> = ({
    children,
    bgColor = eColors.primary,
    title = "",
}) => (
            <SafeAreaView style={styles.root}>
                <StatusBar />
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            navigationRef.current?.goBack();
                        }}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[
                    styles.background,
                    { backgroundColor: bgColor }
                ]}>
                    {children}
                </View>
            </SafeAreaView>
        )


export default ModalBasicTemplate