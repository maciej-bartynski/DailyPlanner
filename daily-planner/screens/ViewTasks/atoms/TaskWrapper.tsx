import React from 'react';
import {StyleSheet, View} from 'react-native';

const ViewTasksTaskWrapper: React.FC = ({children}) => (
  <View style={styles.taskWrapper}>{children}</View>
);

const styles = StyleSheet.create({
  taskWrapper: {
    paddingBottom: 5,
  },
});

export default ViewTasksTaskWrapper;
