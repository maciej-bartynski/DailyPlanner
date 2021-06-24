import React from "react";
import { StyleSheet, Text } from "react-native";
import { eFontSize, eFontWeight } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors"

export const TemplateMessage: React.FC<{
    children: string,
    color?: string,
}> = ({
    children,
    color = eColors.secondaryDark
}) => {
    return (
        <Text style={[
            styles.root,
            { color }
        ]}>
            {children}
        </Text>
    )
}

const styles =  StyleSheet.create({
    root: {
        fontSize: eFontSize.headline,
        fontWeight: eFontWeight.extraBlack,
    }
})
