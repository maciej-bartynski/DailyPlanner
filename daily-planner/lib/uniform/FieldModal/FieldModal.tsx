import React, { useState, useCallback, useRef, useMemo } from 'react';
import { Modal, SafeAreaView, TextInput } from 'react-native';
import FieldModalContext from './fieldModalContext';

interface Props {
    modalable?: boolean;
}

const FieldModal: React.FC<Props> = ({ children, modalable }) => {
    const [focused, _setFocused] = useState<boolean>(false);

    const inputReference = useRef<TextInput>(null);

    const setFocused = useCallback(
        (isFocused: boolean) => {
            _setFocused(isFocused);
        },
        [_setFocused],
    );

    const onShow = useCallback(() => {
        if (inputReference.current) {
            inputReference.current.focus();
        }
    }, []);

    const memoized = useMemo(
        () => ({
            onShow,
            setFocused,
            focused,
            inputReference,
            modalable,
        }),
        [onShow, setFocused, focused, modalable],
    );

    const content = (modalable && focused)
        ? (
            <Modal
                visible={true}
                transparent={false}
                animationType="fade"
                onShow={onShow}>
                <SafeAreaView>{children}</SafeAreaView>
            </Modal>
        )
        : <>{children}</>;

    return (
        <FieldModalContext.Provider value={memoized}>
            {content}
        </FieldModalContext.Provider>
    )

};

export default FieldModal;
