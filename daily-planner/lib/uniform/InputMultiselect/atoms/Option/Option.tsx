import React, { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import OptionStyle from './Option.styles';

interface Props {
    label: string,
    value: string,
    unselectOption: (value: string) => void;
    selectOption: (value: string) => void; 
    isSelected: boolean;
}

const Option: React.FC<Props> = ({
    label,
    value,
    selectOption,
    unselectOption,
    isSelected,
}) => {

    const onPressHandler = useCallback(() => {
        if (isSelected) unselectOption(value);
        else selectOption(value);
    }, [selectOption, value]);

    return (
        <Pressable 
            onPress={onPressHandler} 
            style={OptionStyle.input__optionButton}
        >
            <View style={OptionStyle.input__optionButtonInner} />
            <View style={OptionStyle.input__option}>
                <Text style={OptionStyle.input__optionLabel}>
                    {label}
                </Text>
            </View>
        </Pressable>
    )
}

export default Option;