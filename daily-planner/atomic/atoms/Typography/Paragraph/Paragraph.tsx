import React from 'react';
import { Text } from 'react-native';
import ParagraphStyles, { iParagraphStyles } from './Paragraph.styles';

interface Props {
    content: string,
    styles?: iParagraphStyles
}

const Paragraph: React.FC<Props> = ({
    content,
    styles = ParagraphStyles
}) => (
        <Text style={styles.paragraph}>
            {content}
        </Text>
    )

export default Paragraph