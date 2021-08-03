import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.primaryText,
    textTransform: 'capitalize',
    marginHorizontal: 20,
  },
  carts: {
    marginHorizontal: 20,
    marginTop: 25,
  },
});
