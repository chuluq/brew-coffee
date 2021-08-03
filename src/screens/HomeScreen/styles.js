import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 16,
  },
  greetingWrapper: {},
  greeting: {
    color: colors.secondaryText,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
  username: {
    color: colors.primaryText,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loyaltyWrapper: {
    backgroundColor: colors.primaryBackground,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
  },
  loyaltyDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loyaltyDetailsText: {
    color: colors.secondaryText,
    fontFamily: 'Poppins-Medium',
  },
  loyaltyIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 12,
    borderRadius: 12,
    padding: 12,
  },
  coffee: {
    marginHorizontal: 2,
  },
  menuWrapper: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    marginTop: 38,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  menuTitle: {
    marginHorizontal: 20,
    marginTop: 16,
    color: colors.secondaryText,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  menuCard: {
    marginHorizontal: 20,
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
