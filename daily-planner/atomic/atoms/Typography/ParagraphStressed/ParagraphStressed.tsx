import React from 'react';
import ParagraphStressedStyles from './ParagraphStressed.styles';
import Paragraph from 'atomic/atoms/Typography/Paragraph';

interface Props {
    content: string
}

const ParagraphStressed : React.FC<Props> = ({ content }) => (
    <Paragraph
        styles={ParagraphStressedStyles}
        content={content}
    />
)

export default ParagraphStressed