import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View, StyleSheet, GestureResponderEvent, Text } from "react-native";
import ButtonRounded from "atomic/atoms/ButtonRounded";
import { eColors } from "lib/styles/colors";
import TemplateMessageManager from "atomic/molecules/TemplateMessageManager";

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: 70,
        height: 70,
        position: "absolute",
        bottom: 10,
        right: 10,
    },
})

const CreationPageTemplate: React.FC<{
    loading?: string,
    error?: string,
    data?: string,
    bgColor?: string,
    onCreatePressHandler: () => void
}> = ({
    loading = "",
    error = "",
    data = "",
    children,
    bgColor = eColors.primary,
    onCreatePressHandler
}) => (
            <SafeAreaView style={styles.root}>
                <StatusBar />
                <View style={[
                    styles.background,
                    { backgroundColor: bgColor }
                ]}>
                    {children}
                    <TemplateMessageManager
                        error={error}
                        loading={loading}
                        data={data}
                    />
                    <View style={styles.button}>
                        <ButtonRounded onPressHandler={() => onCreatePressHandler()} />
                    </View>
                </View>
            </SafeAreaView>
        )


export default CreationPageTemplate