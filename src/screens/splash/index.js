import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './index-styles';
import {Logo, } from '../../assets/svg/index';
export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Logo width={'200px'} height={'200px'} />
    </SafeAreaView>
  );
}
