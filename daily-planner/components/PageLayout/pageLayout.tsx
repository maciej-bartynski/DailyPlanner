import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const PageLayout: React.FC = ({children}) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar />
      <View style={styles.root}>{children}</View>
    </SafeAreaView>
  );
};

export default PageLayout;
