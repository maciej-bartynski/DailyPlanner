import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, View, Text} from 'react-native';
import ButtonRounded from 'atomic/atoms/ButtonRounded';
import {TemplateMessageManager} from 'atomic';
import styles from './CreationPageTemplate.styles';

type Props = {
  loading?: string;
  error?: string;
  data?: string;
  bgColor?: string;
  onCreatePressHandler: () => void;
  title?: string;
};

export const CreationPageTemplate: React.FC<Props> = ({
  loading = '',
  error = '',
  data = '',
  children,
  bgColor = 'white',
  onCreatePressHandler,
  title,
}) => (
  <SafeAreaView style={styles.root}>
    <StatusBar />
    <View style={styles.header}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
    </View>
    <View style={[styles.background, {backgroundColor: bgColor}]}>
      {children}
      <TemplateMessageManager error={error} loading={loading} data={data} />
      <View style={styles.button}>
        <ButtonRounded onPressHandler={() => onCreatePressHandler()} />
      </View>
    </View>
  </SafeAreaView>
);
