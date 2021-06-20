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

export const fontMain = "sans-serif";

export const mixins = StyleSheet.create({
    title: {
        fontSize: eFontSize.title,
        fontFamily: fontMain,
        fontWeight: eFontWeight.bold,
    },
    subtitle: {
        fontSize: eFontSize.subtitle,
        fontFamily: fontMain,
        fontWeight: eFontWeight.stress,
    },
    headline: {
        fontSize: eFontSize.headline,
        fontFamily: fontMain,
        fontWeight: eFontWeight.normal,
    },
    paragraph: {
        fontSize: eFontSize.paragraph,
        fontFamily: fontMain,
        fontWeight: eFontWeight.normal,
    }
})