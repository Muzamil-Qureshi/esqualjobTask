import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../../config/colors';
import fontFamily from '../../../assets/fontsFamily/index';
import fontSize from '../../../config/fontSize';
const Header = ({
  title = 'Esqual',
  icon = <Entypo name="menu" size={25} color={'black'} />,
  img = require('../../../assets/photos/man.jpeg'),
  imgStyle,
  textsty,
  inconTouchbale = () => {},
  imgTouchable = () => {},
}) => {
  const validateText = str => {
    // console.log(str);
    var tarea = str.toString();
    if (tarea?.indexOf('http://') == 0 || tarea?.indexOf('https://') == 0) {
      // do something here
      return true;
    }
    return false;
  };
  return (
    <View style={styles.componentContainer}>
      <TouchableOpacity onPress={inconTouchbale}>{icon}</TouchableOpacity>
      <Text style={{...styles.componentTextStyle, ...textsty}}>{title}</Text>
      <TouchableOpacity onPress={imgTouchable}>
        <Image
          source={!validateText(img) ? img : {uri: img}}
          style={{...styles.imgComponent, ...imgStyle}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(100),
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imgComponent: {
    height: wp(7),
    width: wp(7),
    resizeMode: 'contain',
    borderRadius: 100,
    // borderWidth: 1,
    // borderColor: colors.lightBlue
  },
  componentTextStyle: {
    color: colors.black,
    fontSize: fontSize.font20,
    fontFamily: fontFamily.proximaNovaBold,
    fontWeight: 'bold',
  },
});
