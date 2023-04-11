import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import fontFamily from '../../assets/fontsFamily';
import fontSize from '../../config/fontSize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: hp(100),
    width: wp(100),
  },
  renderimage: {
    resizeMode: 'contain',
    height: hp(17),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: wp(27),
  },
  actionButtonsView: {justifyContent: 'space-around', marginHorizontal: wp(2)},
  renderMainView: {
    marginTop: hp(2),
    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldFont: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSize.font16,
    width: wp(17),
    fontFamily: fontFamily.ProximaNovaRegular,
  },
  blueFont: {
    color: colors.lightBlue,
    fontWeight: '500',
    fontSize: fontSize.font14,
    width: wp(30),
    fontFamily: fontFamily.ProximaNovaRegular,
  },
});
export default styles;
