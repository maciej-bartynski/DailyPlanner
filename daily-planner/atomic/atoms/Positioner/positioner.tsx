import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
    xstart?: boolean,
    xend?: boolean,
    xcenter?: boolean,
    ystart?: boolean,
    ycenter?: boolean,
    yend?: boolean
}

export const Positioner: React.FC<Props> = ({
    xstart = false,
    xend = false,
    xcenter = true,
    ycenter = false,
    yend = true,
    ystart = false,
    children
}) => {
    const mainAxisStyle = { justifyContent: "flex-end" };
    const secondAxisStyle = { alignItems: "center" };

    switch (true) {
        case xstart:
            secondAxisStyle.alignItems = "flex-start";
            break;
        case xcenter:
            secondAxisStyle.alignItems = "center";
            break;
        case xend:
            secondAxisStyle.alignItems = "flex-end";
            break;
        default:
            secondAxisStyle.alignItems = "center";
    }

    switch (true) {
        case ystart:
            mainAxisStyle.justifyContent = "flex-start";
            break;
        case ycenter:
            mainAxisStyle.justifyContent = "center";
            break;
        case yend:
            mainAxisStyle.justifyContent = "flex-end";
            break;
        default:
            mainAxisStyle.justifyContent = "flex-end";
    }
    return (
        <View style={[
            mainAxisStyle as { [key: string]: string},
            secondAxisStyle as { [key: string]: string},
            styles.root
        ]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
})