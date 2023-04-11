import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
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
import {signUp} from '../../services/auth';
import {showMessage} from 'react-native-flash-message';

export default function Signup({navigation}) {
  const [passwordShow, setpasswordShow] = useState(true);
  const [confirmPasswordShow, setconfirmPasswordShow] = useState(true);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [name, setname] = useState('');
  const [loaderShow, setloaderShow] = useState(false);

  const signupFunction = async () => {
    setloaderShow(true);
    let result = await signUp(email, password, confirmPassword, name);

    showMessage({
      message: result,
      type: 'default',
      floating: true,
      backgroundColor: colors.lightBlue,
    });
    setloaderShow(false);

    if (result == 'success') {
      navigation.navigate('Login');
      empty();
    }
  };
  const empty = () => {
    setname('');
    setpassword('');
    setconfirmPassword('');
    setemail('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{padding: 16}}>
        <View style={styles.logoView}>
          <Logo width={'150px'} height={'150px'} />
        </View>
        <PrimaryTextInput
          value={name}
          placeholder="Name"
          onchangetext={e => setname(e)}
        />
        <PrimaryTextInput
          value={email}
          placeholder="Email"
          onchangetext={e => setemail(e)}
          outerView={{marginTop: hp(2)}}
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
        <PrimaryTextInput
          value={confirmPassword}
          securetextinput={confirmPasswordShow}
          onchangetext={e => setconfirmPassword(e)}
          outerView={{marginTop: hp(2)}}
          icon={
            confirmPasswordShow ? (
              <AntDesign name="eye" size={24} color={colors.lightBlue} />
            ) : (
              <Ionicons name="ios-eye-off" size={24} color={colors.lightBlue} />
            )
          }
          placeholder="Confirm Password"
          showPassword={() => {
            setconfirmPasswordShow(!confirmPasswordShow);
          }}
        />
        <PrimaryButton
          loader={loaderShow}
          btnStyle={{marginTop: hp(2)}}
          btnTitle={'Signup'}
          onPress={() => signupFunction()}
        />
        <View style={styles.alreadyAccountView}>
          <Text style={styles.alreadyAccoutText}>Already Have Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signuptext}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
