import React from 'react';
import { Image, View, Text } from 'react-native';
import TextWithIconStyles from './TextWithIcon.styles';

interface Props {
    content: string
}

const TextWithIcon: React.FC<Props> = ({
    content
}) => (
        <View style={TextWithIconStyles.textWithIcon}>
            <View style={TextWithIconStyles.textWithIcon__iconWrapper}>
                <Image
                    style={TextWithIconStyles.textWithIcon__icon}
                    source={require('./../../../assets/images/clipboard.png')}
                />
            </View>
            <Text style={TextWithIconStyles.textWithIcon__text}>
                {content}
            </Text>
        </View>
    )

export default TextWithIcon;