import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  bannerWrapper: {
    backgroundColor: colors.secondaryBackground,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bannerImage: {
    width: 172,
    height: 128,
  },
  detailsWrapper: {
    marginTop: 36,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  detailsCoffee: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 10,
  },
  title: {
    color: colors.primaryText,
    textTransform: 'capitalize',
  },
  shotType: {
    flexDirection: 'row',
  },
  shots: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.secondaryText,
    marginHorizontal: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    fontSize: 12,
    textAlign: 'center',
    color: colors.primaryText,
  },
  coffeeTypeIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coffeeType: {
    marginHorizontal: 10,
  },
  sizeIcon: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  smallSize: {
    width: 17,
    height: 22,
    marginHorizontal: 10,
  },
  mediumSize: {
    width: 24,
    height: 31,
    marginHorizontal: 10,
  },
  bigSize: {
    marginHorizontal: 10,
  },
  iceIcon: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ice: {
    marginHorizontal: 10,
  },
  totalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
});
