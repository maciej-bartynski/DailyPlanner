import React from 'react';
import PageLayout from 'components/PageLayout';
import {View, Text, Button, useColorScheme, StyleSheet} from 'react-native';
import {ModalsStackParamList} from 'lib/navigation/_types';
import {RouteProp} from '@react-navigation/native';
import navigationRef from 'lib/navigation/reference';
import someElement from 'func';
const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

type ViewsScreensProps = RouteProp<ModalsStackParamList, 'Modal2'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Modal2: React.FC<ViewProp> = ({route}) => {
  const {params} = route;
  const {title} = params;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PageLayout>
      <View style={styles.sectionContainer}>
        {someElement}
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title} THIS MODAL
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          Some content to render in {title} MODAL
        </Text>
        <View>
          <Button
            title="Close modal!"
            onPress={() => navigationRef.current?.goBack()}
          />
        </View>
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Modal2;
