import { StyleSheet } from "react-native";

export enum eFontSize {
    title = 20,
    subtitle = 18,
    headline = 16,
    paragraph = 14,
    smallText = 12,
    tinyText = 10,
}

export enum eFontWeight {
    extraBlack = "bold",
    black = "bold",
    extraBold = "bold",
    bold = "bold",
    stress = "bold",
    normal = "normal",
    thin = "normal",
    extraThin = "normal",
    white = "normal"
}

export const mixins = StyleSheet.create({
    title: {
        fontSize: eFontSize.title,
        fontWeight: eFontWeight.bold,
    },
    subtitle: {
        fontSize: eFontSize.subtitle,
        fontWeight: eFontWeight.stress,
    },
    headline: {
        fontSize: eFontSize.headline,
        fontWeight: eFontWeight.normal,
    },
    paragraph: {
        fontSize: eFontSize.paragraph,
        fontWeight: eFontWeight.normal,
    },
    input: {
        fontSize: eFontSize.smallText,
        fontWeight: eFontWeight.normal,
    },
    label: {
        fontSize: eFontSize.tinyText,
        fontWeight: eFontWeight.bold,
    },
})