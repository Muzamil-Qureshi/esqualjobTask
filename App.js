import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigations from './src/navigations/mainNavigations';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigations />
    </SafeAreaView>
  );
};

export default App;
