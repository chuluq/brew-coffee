import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: colors.primaryText,
    textTransform: 'capitalize',
    marginHorizontal: 20,
    marginTop: 16,
  },
});
