import React, { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import SelectedOptionStyle from './SelectedOption.styles';

interface Props {
    label: string, 
    value: string,
    unselectOption: (value: string) => void;
}

const SelectedOption: React.FC<Props> = ({
    label, 
    value,
    unselectOption,
})=> {

    const onPressHandler = useCallback(() => {
        unselectOption(value)
    },[unselectOption, value]);

    return (
        <View style={SelectedOptionStyle.input__selectedOption}>
            <Text style={SelectedOptionStyle.input__selectedOptionLabel}>
                { label }
            </Text>
            <Pressable onPress={onPressHandler} style={SelectedOptionStyle.input__selectedOptionButton}>
                <View style={SelectedOptionStyle.input__selectedOptionButtonInner}>
                    <Text style={SelectedOptionStyle.input__selectedOptionButtonInnerIcon}>
                        x
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default SelectedOption;