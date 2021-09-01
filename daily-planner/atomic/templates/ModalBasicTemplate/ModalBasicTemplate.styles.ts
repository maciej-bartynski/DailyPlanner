import {StyleSheet} from 'react-native';
import {eColors} from 'lib/styles/colors';
import {mixins} from 'lib/styles/fonts';
import {shadowMain} from 'lib/styles/shadow';

const modalBasicTemplateStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: eColors.Primary,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    minHeight: 70,
    alignItems: 'flex-start',
    paddingLeft: 20,
    borderBottomColor: eColors.Primary,
    borderBottomWidth: 1,
  },
  titleWrapper: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    ...mixins.title,
    color: eColors.Gray,
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
    margin: 5,
    paddingBottom: 0,
    ...shadowMain,
  },
});

export default modalBasicTemplateStyles;
