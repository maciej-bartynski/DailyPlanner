import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import InputMultiselectStyles from './InputMultiselect.styles';
import SelectedOption from './atoms/SelectedOption';

export type tOption = {
    label: string,
    value: string,
}

export interface InputMultiselectProps {
    onFocus: (e?: any) => void;
    onBlur: (e?: any) => void;
    selectedOptions: tOption[];
    options: tOption[]
}

const InputMultiselect: React.FC<InputMultiselectProps> = ({
    onFocus,
    onBlur,
    selectedOptions,
    options,
}) => {

    const [focused, setFocused] = useState(false);

    const onPressHandler = () => {
        if (focused) {
            setFocused(false);
            onFocus();
        } else {
            setFocused(true)
            onBlur()
        }
    }

    const onSelect = (value: string) => {};
    const onUnselect = (value: string) => {}
    return (
        <Pressable onPress={onPressHandler}>
            <View style={InputMultiselectStyles.input}>
                <View style={InputMultiselectStyles.input__results}>
                    { selectedOptions && selectedOptions.map(option => (
                        <SelectedOption 
                            key={option.value}
                            {...option}
                            unselectOption={onUnselect}
                        />
                    )) }
                </View>
            </View>
            <View>
                
            </View>
        </Pressable>
    )
}