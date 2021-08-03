import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.primaryBackground,
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
});
