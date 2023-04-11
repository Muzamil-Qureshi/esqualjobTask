import * as React from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/splash';
import Login from '../../screens/login';
import Signup from '../../screens/signup';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../../screens/home';
import FlashMessage from 'react-native-flash-message';
import Insert from '../../screens/insert';
import Update from '../../screens/update';
import SingelRecord from '../../screens/singelRecord';
const Stack = createNativeStackNavigator();
export default function RootNavigations() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                translucent={false}
                backgroundColor={'#ffffff'}
                barStyle={Platform?.OS === 'ios' ? 'default' : 'dark-content'}
            />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Splash' component={Splash} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Signup' component={Signup} />
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Insert' component={Insert} />
                    <Stack.Screen name='Update' component={Update} />
                    <Stack.Screen name='SingelRecord' component={SingelRecord} />
                </Stack.Navigator>
                <FlashMessage position="top" />
            </NavigationContainer>
        </SafeAreaView>
    )
}