import {mixins} from 'lib/styles/fonts';
import {StyleSheet} from 'react-native';
import {eColors} from 'lib/styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: eColors.secondaryDark,
    backgroundColor: eColors.secondaryDark,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  name: {
    ...mixins.subtitle,
    marginBottom: 10,
    color: 'white',
  },
  description: {
    ...mixins.paragraph,
    marginBottom: 10,
    color: 'white',
  },
  duration: {
    ...mixins.paragraph,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 10,
    paddingBottom: 10,
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
  },
});

export default styles;
