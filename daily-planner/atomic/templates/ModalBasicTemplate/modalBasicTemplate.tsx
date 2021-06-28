import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, View, StyleSheet, Text, Button} from 'react-native';
import {eColors} from 'lib/styles/colors';
import navigationRef from 'lib/navigation/reference';
import {mixins} from 'lib/styles/fonts';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: eColors.primaryDark,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 70,
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomColor: eColors.primaryDark,
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    ...mixins.title,
    color: eColors.textOnPrimary,
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
    margin: 5,
    paddingBottom: 50,
  },
});

export const ModalBasicTemplate: React.FC<{
  bgColor?: string;
  title?: string;
}> = ({children, bgColor = 'white', title = ''}) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.wrapper}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Button
          title="Close"
          onPress={() => {
            navigationRef.current?.goBack();
          }}
        />
      </View>
      <View style={[styles.background, {backgroundColor: bgColor}]}>
        {children}
      </View>
    </View>
  </SafeAreaView>
);
