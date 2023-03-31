import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
  img: {
    backgroundColor: 'black',
    width: 20,
    height: 20,
  },
  content: {
    flex: 1,
  },
  disabledText: {
    color: '#999',
  },
  normal: {
    color: '#000',
  },
});
