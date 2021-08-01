import React from 'react';
import {StyleSheet, View} from 'react-native';

const Positioner: React.FC = ({children}) => (
  <View style={styles.positioner}>{children}</View>
);

const styles = StyleSheet.create({
  positioner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});

export default Positioner;
