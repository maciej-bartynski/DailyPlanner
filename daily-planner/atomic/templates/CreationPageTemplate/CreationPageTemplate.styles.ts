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
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 70,
    right: 10,
  },
  title: {
    flex: 1,
    ...mixins.title,
    color: eColors.Gray,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: eColors.White,
    ...shadowMain,
  },
});

export default styles;
