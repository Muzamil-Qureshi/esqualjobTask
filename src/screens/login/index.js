import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingViewBase,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../config/colors';
import styles from './index-styles';
import {Logo} from '../../assets/svg/index';
import PrimaryTextInput from '../../components/atoms/primaryTextInputs/primaryTextInput';
import PrimaryButton from '../../components/atoms/primarybutton/primarytButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';

import {LogIn} from '../../services/auth';
export default function Login({navigation}) {
  const [passwordShow, setpasswordShow] = useState(true);
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const [loaderShow, setloaderShow] = useState(false);

  const loginFunction = async () => {
    setloaderShow(true);
    let result = await LogIn(userName, password);
    console.log(result);
    showMessage({
      message: result,
      type: 'default',
      floating: true,
      backgroundColor: colors.lightBlue,
    });
    if (result == 'success') {
      navigation.replace('Home');
      empty();
    }
    setloaderShow(false);
  };
  const empty = () => {
    setuserName('');
    setpassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{padding: 16}}>
        <View style={styles.logoView}>
          <Logo width={'150px'} height={'150px'} />
        </View>
        <PrimaryTextInput
          value={userName}
          placeholder="User Name"
          onchangetext={e => setuserName(e)}
        />
        <PrimaryTextInput
          value={password}
          securetextinput={passwordShow}
          onchangetext={e => setpassword(e)}
          outerView={{marginTop: hp(2)}}
          icon={
            passwordShow ? (
              <AntDesign name="eye" size={24} color={colors.lightBlue} />
            ) : (
              <Ionicons name="ios-eye-off" size={24} color={colors.lightBlue} />
            )
          }
          placeholder="Password"
          showPassword={() => {
            setpasswordShow(!passwordShow);
          }}
        />
        <PrimaryButton
          loader={loaderShow}
          onPress={() => loginFunction()}
          btnStyle={{marginTop: hp(2)}}
          btnTitle={'Login'}
        />
        <View style={styles.alreadyAccountView}>
          <Text style={styles.alreadyAccoutText}>Don't Have Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
