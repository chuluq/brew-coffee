import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: colors.secondaryBackground,
    padding: 10,
    marginBottom: 16,
  },
  detailsWrapper: {
    marginHorizontal: 'auto',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.primaryText,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    marginTop: 4,
  },
  amount: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 5,
    color: 'rgba(0,0,0,0.57)',
  },
  price: {
    marginLeft: 'auto',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.primaryText,
  },
});
