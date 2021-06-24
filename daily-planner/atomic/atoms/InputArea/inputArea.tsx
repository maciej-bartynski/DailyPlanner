import React from "react"
import { TextInput } from "react-native-gesture-handler"
import { Text, NativeSyntheticEvent, TextInputFocusEventData, StyleSheet, View } from "react-native"
import { eColors } from "lib/styles/colors"
import { mixins } from "lib/styles/fonts";

type Props = {
    placeholder?: string,
    onChangeText: (text: string) => void,
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    value: string,
    error?: string,
    label?: string,
    expectError?: boolean,
    numberOfLines?: number,
}

export const InputArea: React.FC<Props> = ({
    placeholder,
    onChangeText,
    onBlur,
    value,
    label,
    error,
    expectError = false,
    numberOfLines = 10,
}) => {
    return (
        <View style={styles.wrapper}>
            {label
                ? <Text style={styles.label}>{label}</Text>
                : null}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                numberOfLines={numberOfLines}
                multiline={true}
            />
            {expectError || error
                ? <Text style={styles.error}>{error}</Text>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 160,
        borderWidth: 1,
        borderColor: eColors.secondaryDark,
        borderRadius: 10,
        padding: 10,
        ...mixins.input,
    },
    wrapper: {},
    error: {
        ...mixins.input,
        marginBottom: 10,
        marginLeft: 10,
        color: eColors.warning
    },
    label: {
        ...mixins.label,
        marginBottom: 10,
        marginLeft: 10
    }
})