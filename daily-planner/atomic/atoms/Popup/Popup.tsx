import React from 'react';
import { Modal, View, Pressable } from 'react-native';
import PopupStyle from './Popup.styles';

interface Props {
    visible?: boolean;
    onShow?: () => void;
    setClose: () => void;
}

const Popup: React.FC<Props> = ({
    children,
    visible = true,
    onShow,
    setClose,
}) => (
        <Modal
            visible={visible}
            onShow={onShow}
            animationType='fade'
            transparent={true}
        >
            <View style={PopupStyle.popup__background}>
                <Pressable 
                    onPress={setClose}
                    style={PopupStyle.popup__pressable}
                />
                <View style={PopupStyle.popup__modal}>
                    {children}
                </View>
            </View>
        </Modal>
    )

export default Popup;