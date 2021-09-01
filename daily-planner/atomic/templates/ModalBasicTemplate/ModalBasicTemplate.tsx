import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, View, Text } from 'react-native';
import navigationRef from 'lib/navigation/reference';
import modalBasicTemplateStyles from './ModalBasicTemplate.styles';
import Button from 'atomic/atoms/Button';
import ButtonRounded from 'atomic/atoms/ButtonRounded';
import { eButtonVariant } from 'atomic/atoms/ButtonRounded/ButtonRounded';

type Props = {
  bgColor?: string;
  title?: string;
  titleElement?: JSX.Element;
};

const ModalBasicTemplate: React.FC<Props> = ({
  children,
  bgColor = 'white',
  title = '',
  titleElement
}) => (
    <SafeAreaView style={modalBasicTemplateStyles.root}>
      <View style={modalBasicTemplateStyles.wrapper}>
        <StatusBar />
        <View style={modalBasicTemplateStyles.header}>
          <View style={modalBasicTemplateStyles.titleWrapper}>
            {titleElement || <Text
              numberOfLines={2}
              style={modalBasicTemplateStyles.title}
            >
              {title}
            </Text>}
          </View>
          <ButtonRounded
            variant={eButtonVariant.Close}
            onPressHandler={navigationRef.current?.goBack}
          />
        </View>
        <View
          style={
            useRef([
              modalBasicTemplateStyles.background,
              { backgroundColor: bgColor },
            ]).current
          }>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );

export default ModalBasicTemplate;
