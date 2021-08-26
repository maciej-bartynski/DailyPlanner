import React from 'react';
import { Text, View } from 'react-native';
import TextWithBulletStyles from './TextWithBullet.styles';

interface Props {
    label: string,
    content: string,
}

const TextWithBullet : React.FC<Props> = ({
    label,
    content
}) => (
    <View style={TextWithBulletStyles.textWithBullet}>
        <View style={TextWithBulletStyles.textWithBullet__bullet}/>
        <Text style={TextWithBulletStyles.textWithBullet__label}>
            { label }
        </Text>
        <Text style={TextWithBulletStyles.textWithBullet__content}>
            { content }
        </Text>
    </View>
)

export default TextWithBullet;