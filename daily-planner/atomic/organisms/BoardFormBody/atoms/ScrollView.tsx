import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const ScrollViewStyled: React.FC = ({children}) => (
  <ScrollView style={styles.scrollView}>{children}</ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    padding: 10,
  },
});

export default ScrollViewStyled;
