import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import TimeRuler from 'atomic/atoms/TimeRuler';

type Props = {
  height?: number;
};

const TimeRulerBoard: React.FC<Props> = ({children, height = 1440}) => {
  return (
    <ScrollView
      style={styles.timeRulerBoard}
      contentContainerStyle={styles.timeRulerBoard__contentContainer}>
      <TimeRuler height={height} />
      <View style={[styles.timeRulerBoard__content, {height}]}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timeRulerBoard: {
    width: '100%',
  },
  timeRulerBoard__contentContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  timeRulerBoard__content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gray',
  },
});

export default TimeRulerBoard;
