import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View, StyleSheet, Text } from "react-native";
import ButtonRounded from "atomic/atoms/ButtonRounded";
import { TemplateMessageManager } from "atomic";
import { mixins } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "white"
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50
    },
    button: {
        width: 70,
        height: 70,
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    title: {
        flex: 1,
        ...mixins.title,
        color: eColors.textOnPrimary
    },
    header: {
        flexDirection: "row",
        backgroundColor: "white",
        height: 70,
        alignItems: "center",
        paddingLeft: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: eColors.secondary,
        borderTopColor: eColors.secondary
    },
})

export const CreationPageTemplate: React.FC<{
    loading?: string,
    error?: string,
    data?: string,
    bgColor?: string,
    onCreatePressHandler: () => void,
    title?: string
}> = ({
    loading = "",
    error = "",
    data = "",
    children,
    bgColor = "white",
    onCreatePressHandler,
    title
}) => (
            <SafeAreaView style={styles.root}>
                <StatusBar />
                <View style={styles.header}>
                    {title
                        ? <Text style={styles.title}>
                            {title}
                        </Text>
                        : null}
                </View>
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

