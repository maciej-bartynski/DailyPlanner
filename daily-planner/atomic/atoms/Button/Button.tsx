import React from "react";
import { TouchableHighlight, Text, GestureResponderEvent, StyleSheet } from 'react-native';
import { eFontSize } from "lib/styles/fonts";

type Props = {
    title: string,
    onPress?: (e: GestureResponderEvent) => void;
    onPressAsync?: (e: GestureResponderEvent) => Promise<void>;
    styles?: Record<string, Record<string, unknown>>;
}

const defaultStyles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    title: {
        fontSize: eFontSize.paragraph,
    }
});

const Button: React.FC<Props> = ({
    title,
    onPress,
    onPressAsync,
    styles,
}) => (
        <TouchableHighlight
            style={Object.assign(styles ||{}, defaultStyles).button}
            onPress={onPressAsync
                ? onPressAsync
                : onPress
            }>
            <Text style={Object.assign(styles||{}, defaultStyles).title}>
                {title}
            </Text>
        </TouchableHighlight>
    )

export default Button;