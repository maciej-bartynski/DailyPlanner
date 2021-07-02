import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Props = {
  height?: number;
};

function timeFormatter(param: number) {
  const toString = '' + param;
  return toString.length === 2 ? toString : `0${toString}`;
}

const printMinutes = (isLast?: boolean) => {
  return (
    <View
      style={[
        styles.timeRuler__tenMinutes,
        isLast ? {borderBottomWidth: 0} : undefined,
      ]}>
      <View style={styles.timeRuler__fiveMinutes} />
    </View>
  );
};

const printHoursIndicator = () => {
  const hours = [];
  for (let i = 0; i <= 24; i++) {
    const currentHour = timeFormatter(i) + ':00';

    hours.push(
      <View key={i} style={styles.timeRuler__hour}>
        <Text
          style={[
            styles.timeRuler__hourText,
            i === 0 ? styles.timeRuler__hourTextFirst : undefined,
            i === 24 ? styles.timeRuler__hourTextLast : undefined,
          ]}>
          {currentHour}
        </Text>
      </View>,
    );
  }
  return hours;
};

const printHoursRuler = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(
      <View key={i} style={styles.timeRuler__hour}>
        {printMinutes()}
        {printMinutes()}
        {printMinutes()}
        {printMinutes()}
        {printMinutes()}
        {printMinutes(true)}
      </View>,
    );
  }
  return hours;
};

const TimeRuler: React.FC<Props> = ({height = 1440}) => {
  return (
    <View style={[styles.root, {height}]}>
      <View style={[styles.timeRuler, styles.timeRulerLabels]}>
        {printHoursIndicator()}
      </View>
      <View style={styles.timeRuler}>{printHoursRuler()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 60,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timeRuler: {
    height: '100%',
    width: 20,
    borderBottomColor: 'transparent',
    alignItems: 'flex-start',
  },
  timeRulerLabels: {
    width: 40,
    alignItems: 'flex-end',
  },
  timeRuler__hour: {
    width: '90%',
    height: `${100 / 24}%`,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    borderBottomColor: 'black',
  },
  timeRuler__tenMinutes: {
    width: '50%',
    alignItems: 'flex-start',
    height: `${100 / 6}%`,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  timeRuler__fiveMinutes: {
    width: '50%',
    alignItems: 'flex-start',
    height: '50%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  timeRuler__hourText: {
    fontSize: 10,
    lineHeight: 10,
    height: 10,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    top: -5,
  },
  timeRuler__hourTextFirst: {
    top: 0,
  },
  timeRuler__hourTextLast: {
    top: -10,
  },
});

export default TimeRuler;
