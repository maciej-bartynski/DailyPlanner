import React from 'react';
import TitleStyles from './Title.styles';
import Paragraph from 'atomic/atoms/Typography/Paragraph';

interface Props {
    content: string
}

const Title : React.FC<Props> = ({ content }) => (
    <Paragraph
        styles={TitleStyles}
        content={content}
    />
)

export default Title