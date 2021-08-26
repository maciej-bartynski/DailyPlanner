import React from 'react';
import { Text } from 'react-native';
import ParagraphStyles from './Paragraph.styles';

interface Props {
    content: string
}

const Paragraph : React.FC<Props> = ({ content }) => (
    <Text style={ParagraphStyles.paragraph}>
        { content }
    </Text>
)

export default Paragraph