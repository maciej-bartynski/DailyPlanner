import {eColors} from 'lib/styles/colors';
import {StyleSheet} from 'react-native';
import {mixins} from 'lib/styles/fonts';
import {shadowMain} from 'lib/styles/shadow';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  title: {
    flex: 1,
    ...mixins.title,
    backgroundColor: eColors.secondaryDark,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: eColors.secondaryDark,
    ...shadowMain,
  },
});

export default styles;
