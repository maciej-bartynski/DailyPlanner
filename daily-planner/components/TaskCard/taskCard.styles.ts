import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    width: '90%',
    backgroundColor: 'blue',
    padding: 10,
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  content: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
