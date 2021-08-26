import React, { PropsWithChildren, useContext } from 'react';
import Label from 'lib/uniform/Label';
import Message from '../Message';
import Border from '../Border';
import { View } from 'react-native';
import { tFieldName } from '../types';
import FieldWrapperStyles from './FieldWrapper.styles';
import FieldModalContext from '../FieldModal/fieldModalContext';

type Props<FormContextType> = PropsWithChildren<{
    name: tFieldName<FormContextType>;
    label: string;
}>;

const FieldWrapper = function <FormContextType>({
    name,
    label,
    children,
}: Props<FormContextType>) {

    const {
        focused,
        setFocused,
        onShow,
        inputReference,
    } = useContext(FieldModalContext);
    
    return (
        <View style={FieldWrapperStyles.fieldWrapper}>
            <Label label={label || ''} />
            <Border<FormContextType> name={name}>{children}</Border>
            <Message name={name} />
        </View>
    );
};

export default FieldWrapper;
