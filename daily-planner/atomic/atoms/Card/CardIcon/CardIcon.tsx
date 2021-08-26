import React from 'react';
import { View, Image } from 'react-native';
import CardIconStyles from './CardIcon.styles';

interface Props {
    source: string
}

const CardIcon: React.FC<Props> = () => {
    return (
        <View style={CardIconStyles.wrapper}>
            <Image
                style={CardIconStyles.image}
                source={require('./../../../../assets/images/clipboard.png')}
            />
        </View>
    )
}

export default CardIcon;