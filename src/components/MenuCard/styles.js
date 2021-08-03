import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.secondaryBackground,
    width: 154,
    height: 164,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },
  title: {
    color: colors.primaryText,
    fontSize: 14,
    fontFamily: 'DMSans-Medium',
    marginTop: 12,
  },
});
