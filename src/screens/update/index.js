import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index-styles'
import colors from '../../config/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import axios from "axios"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";
import PrimaryButton from '../../components/atoms/primarybutton/primarytButton'
import PrimaryTextInput from '../../components/atoms/primaryTextInputs/primaryTextInput'
import Header from '../../components/atoms/header/header'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Update = ({ navigation, route }) => {
    const [brand, setbrand] = useState(route?.params?.brand)
    const [title, settitle] = useState(route?.params?.title)
    const [category, setcategory] = useState(route?.params?.category)
    const [asyncRecord, setasyncRecord] = useState('')
    const [loader, setloader] = useState(false)
    console.log()

    useEffect(() => {
        asynValues()
    }, [])


    const asynValues = async () => {
        await AsyncStorage.getItem('userdetails').then(async value => {
            let data = JSON.parse(value);
            //  console.log(data)
            setasyncRecord(data)
        }
        )

    }


    const updateRecord = () => {
        setloader(true)
        axios({
            method: 'PUT',
            url: `https://dummyjson.com/products/${route?.params?.id}`,
            data: {
                title: title,
                brand: brand,
                category: category,
            },
            headers: {
                "Authorization": asyncRecord?.token,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
                if (response?.status == '200') {
                    showMessage({
                        message: JSON.stringify(response?.data),
                        type: 'success',
                        floating: true,
                        backgroundColor: colors.lightBlue

                    });
                    console.log(response.data)
                    setloader(false)
                    navigation.navigate('Home')
                }
            })
            .catch(function (error) {
                console.warn("Somethiong wrong")
                setloader(false)
            })

    }

    return (
        <SafeAreaView style={styles.container}>
            <Header img={''} title='Update' icon={<TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name='arrow-back' size={25} color={colors.lightBlue} /></TouchableOpacity>} />

            <KeyboardAwareScrollView>
                <Image source={{ uri: route?.params?.thumbnail }} style={styles.img} />
                <PrimaryTextInput value={brand} outerView={styles.txtInpt} onchangetext={e => setbrand(e)} />
                <PrimaryTextInput value={category} outerView={styles.txtInpt} onchangetext={e => setcategory(e)} />
                <PrimaryTextInput value={title} outerView={styles.txtInpt} onchangetext={e => settitle(e)} />
                <PrimaryButton loader={loader} btnTitle={'Update'} btnStyle={{ marginTop: hp(3) }} onPress={() => updateRecord()} />
            </KeyboardAwareScrollView>

        </SafeAreaView>
    )
}

export default Update;