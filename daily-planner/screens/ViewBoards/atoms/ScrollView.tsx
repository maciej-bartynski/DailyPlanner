import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';

const ViewTasksScrollView: React.FC = ({children}) => (
  <ScrollView
    style={styles.scrollView}
    contentContainerStyle={styles.scrollView__contentContainer}>
    {children}
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  scrollView__contentContainer: {
    padding: 10,
    paddingBottom: 100,
  },
});

export default ViewTasksScrollView;
