import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider';
import { mixins } from "lib/styles/fonts";
import { eColors } from "lib/styles/colors";

type Props = {
    label?: string,
    min: number,
    max: number,
    value: number,
    onValueChange: (arg: string) => void
}

export const InputRange: React.FC<Props> = ({
    label,
    min,
    max,
    value,
    onValueChange
}) => {
    return (
        <View style={styles.wrapper}>
            {label
                ? <Text style={styles.label}>{label}: {value}</Text>
                : <Text style={styles.label}>{value}</Text>
            }
            <Slider
                style={styles.slider}
                minimumValue={min}
                maximumValue={max}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor={eColors.primaryDark}
                step={1}
                onValueChange={(arg:number) => {
                    onValueChange("" + arg);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: eColors.secondaryDark,
        borderRadius: 10,
        padding: 10,
    },
    label: {
        ...mixins.label,
        marginBottom: 10,
        marginLeft: 10
    },
    slider: {
        width: "100%",
        height: 40
    }
})