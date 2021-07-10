import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';

const ViewTasksScrollView: React.FC = ({children}) => (
  <ScrollView style={styles.scrollView}>{children}</ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    padding: 10,
  },
});

export default ViewTasksScrollView;
