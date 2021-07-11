import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, View, Text} from 'react-native';
import navigationRef from 'lib/navigation/reference';
import modalBasicTemplateStyles from './ModalBasicTemplate.styles';
import Button from 'atomic/atoms/Button';
import {eButtonVariant} from 'lib/enums/buttons';

type Props = {
  bgColor?: string;
  title?: string;
};

const ModalBasicTemplate: React.FC<Props> = ({
  children,
  bgColor = 'white',
  title = '',
}) => (
  <SafeAreaView style={modalBasicTemplateStyles.root}>
    <View style={modalBasicTemplateStyles.wrapper}>
      <StatusBar />
      <View style={modalBasicTemplateStyles.header}>
        <Text style={modalBasicTemplateStyles.title}>{title}</Text>
        <Button
          variant={eButtonVariant.Tertiary}
          title="Close"
          onPress={navigationRef.current?.goBack}
        />
      </View>
      <View
        style={
          useRef([
            modalBasicTemplateStyles.background,
            {backgroundColor: bgColor},
          ]).current
        }>
        {children}
      </View>
    </View>
  </SafeAreaView>
);

export default ModalBasicTemplate;
