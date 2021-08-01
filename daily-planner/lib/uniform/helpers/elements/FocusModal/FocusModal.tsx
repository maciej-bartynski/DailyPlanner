import React from 'react';
import { View } from 'react-native';
import FocusModalStyles from './FocusModal.styles';

const FocusModal: React.FC = ({ children }) => {
    return (
        <View style={FocusModalStyles.focusModal}>
            { children }
        </View>
    )
}

export default FocusModal;