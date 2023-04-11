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
  img: {
    alignSelf: 'center',
    height: wp(50),
    width: wp(96),
    resizeMode: 'stretch',
  },
  outerView: {
    padding: 10,
    backgroundColor: colors.white,
    marginHorizontal: wp(2),
    marginTop: hp(1),
  },
  boldheading: {
    color: colors.black,
    fontSize: fontSize.font16,
    fontFamily: fontFamily.proximaNovaBold,
  },
  recordHeading: {
    color: colors.lightBlue,
    fontSize: fontSize.font14,
    fontFamily: fontFamily.proximaNovaBold,
  },
  dropDownText: {color: colors.black, fontSize: fontSize.font14},
  dropDownOutrView: {
    height: hp(7),
    flexDirection: 'row',
    width: wp(90),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  viewInner: {
    height: hp(7),
    width: wp(85),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default styles;
