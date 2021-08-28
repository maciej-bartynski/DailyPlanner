import React, { useState, useRef, useEffect } from 'react';
import { View, Pressable, Modal, TextInput, Text, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import BasicInputStyles from './BasicInput.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { eFormIssueSeverity } from 'components/TaskForm copy/config';

interface Props {
    placeholder?: string;
    value: string,
    onChange: (e: string) => void;
    label?: string,
    message?: string,
    messageSeverity?: eFormIssueSeverity
}

const BasicInput: React.FC<Props> = ({
    placeholder = "",
    value,
    message = "",
    label = "",
    messageSeverity = eFormIssueSeverity.Error,
    onChange
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
                style={BasicInputStyles.basicInput__pressable}
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