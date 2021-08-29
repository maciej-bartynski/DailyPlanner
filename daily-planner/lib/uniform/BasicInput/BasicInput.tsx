import React, { useState, useRef, useEffect } from 'react';
import { View, Pressable, Modal, TextInput, Text, NativeSyntheticEvent, TextInputFocusEventData, ScrollView } from 'react-native';
import BasicInputStyles from './BasicInput.styles';
import { eFormIssueSeverity } from '../types';

interface Props {
    placeholder?: string;
    value: string,
    onChange: (e: string) => void;
    label?: string,
    message?: string,
    messageSeverity?: eFormIssueSeverity,
    numberOfLines?: number
}

const BasicInput: React.FC<Props> = ({
    placeholder = "",
    value,
    message = "",
    label = "",
    messageSeverity = eFormIssueSeverity.Error,
    onChange,
    numberOfLines = 1
}) => {
    const [focused, setFocused] = useState(false);
    const textInputRef = useRef<TextInput>(null);

    const onChangeHandler = (e: string) => {
        onChange(e)
    }

    const onFocusHandler = () => {
        setFocused(true)
    }

    const onBlurHandler = () => {
        setFocused(false)
    }

    const pressableClass = numberOfLines > 1
        ? BasicInputStyles.basicInput__pressableTextArea
        : BasicInputStyles.basicInput__pressable;

    const visibleText = value
        ? value
        : placeholder;

    const fieldMessageColorClass = messageSeverity === eFormIssueSeverity.Error
        ? BasicInputStyles.basicInput__fieldMessageError
        : BasicInputStyles.basicInput__fieldMessageWarning;

    if (focused) {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={focused}
                style={BasicInputStyles.basicInput__modal}
                onShow={() => {
                    if (textInputRef.current) {
                        setTimeout(() => textInputRef?.current?.focus(), 1);
                    }
                }}
            >
                <View style={BasicInputStyles.basicInput__textInputWrapper}>
                    <Text style={BasicInputStyles.basicInput__fieldLabel}>
                        {label}
                    </Text>
                    <TextInput
                        style={BasicInputStyles.basicInput__textInput}
                        ref={textInputRef}
                        onChangeText={onChangeHandler}
                        onFocus={onFocusHandler}
                        onBlur={onBlurHandler}
                        value={value}
                        placeholder={placeholder}
                        multiline={true}
                        numberOfLines={numberOfLines}
                    />
                </View>
                <View style={BasicInputStyles.basicInput__toolbarWrapper}>
                    <Text style={fieldMessageColorClass}>
                        {message}
                    </Text>
                    <Pressable
                        style={BasicInputStyles.basicInput__buttonAccept}
                        onPress={() => {
                            setFocused(false);
                        }}
                    >
                        <Text style={BasicInputStyles.basicInput__buttonAcceptLabel}>
                            Accept
                        </Text>
                    </Pressable>
                </View>
            </Modal>
        )
    }

    return (
        <View style={BasicInputStyles.basicInput}>
            <Text style={BasicInputStyles.basicInput__fieldLabel}>
                {label}
            </Text>
            <Pressable
                onPress={() => setFocused(true)}
                style={pressableClass}
            >
                <Text style={BasicInputStyles.basicInput__pressableText}>{visibleText}</Text>
            </Pressable>
            <Text style={fieldMessageColorClass}>
                {message}
            </Text>
        </View>
    )
}

export default BasicInput;