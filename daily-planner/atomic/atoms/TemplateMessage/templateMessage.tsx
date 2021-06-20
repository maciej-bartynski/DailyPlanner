import React from "react";
import { StyleSheet, Text } from "react-native";
import { eFontSize, eFontWeight, fontMain } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors"

const TemplateMessage: React.FC<{
    children: string,
    color?: string,
}> = ({
    children,
    color = eColors.primaryAccent
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
        fontFamily: fontMain,
        fontWeight: eFontWeight.extraBlack,
    }
})

export default TemplateMessage