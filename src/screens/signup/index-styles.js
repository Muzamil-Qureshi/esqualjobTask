import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import fontFamily from '../../assets/fontsFamily';
import fontSize from '../../config/fontSize';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  alreadyAccoutText: {
    color: colors.black,
    fontFamily: fontFamily.ProximaNovaSemibold,
    fontSize: fontSize.font12,
  },
  signuptext: {
    color: colors.lightBlue,
    fontSize: fontSize.font16,
    fontFamily: fontFamily.ProximaNovaSemibold,
    fontWeight: 'bold',
  },
  alreadyAccountView: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(7),
  },
});
export default styles;
