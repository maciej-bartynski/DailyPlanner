import React from 'react';
import PageLayout from 'components/PageLayout';
import {View, Text, Button, useColorScheme, StyleSheet} from 'react-native';
import {ViewsStackParamList} from 'lib/navigation/_types';
import {RouteProp} from '@react-navigation/native';
import {navigation} from 'lib/navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type ViewsScreensProps = RouteProp<ViewsStackParamList, 'Dashboard'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Dashboard: React.FC<ViewProp> = ({route}) => {
  const {params} = route;
  const {title} = params;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PageLayout>
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          Some content to render in {title}
        </Text>
        <View>
          <Button title="to Dashboard" onPress={navigation.navigateDashboard} />
          <Button title="to Task" onPress={navigation.navigateTask} />
          <Button title="to Detail" onPress={navigation.navigateDetail} />

          <Button title="open M1" onPress={navigation.openModal1} />
          <Button title="open M2" onPress={navigation.openModal2} />
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

export default Dashboard;
