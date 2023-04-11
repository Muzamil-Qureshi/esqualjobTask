import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index-styles'
import colors from '../../config/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Header from '../../components/atoms/header/header'
import axios from "axios"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";
const Home = ({ navigation }) => {
    const [record, setrecord] = useState('')
    const [asyncRecord, setasyncRecord] = useState({})

    useEffect(() => {
        asynValues()
        getRecord()
    }, [])

    const asynValues = async () => {
        await AsyncStorage.getItem('userdetails').then(async value => {
            let data = JSON.parse(value);
            //  console.log(data)
            setasyncRecord(data)
        }
        )

    }

    const getRecord = () => {
        axios({
            method: 'get',
            url: 'https://dummyjson.com/products/category/smartphones',
            headers: {
                'Authorization': asynValues?.token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {
                //  console.log(response.data.products)
                setrecord(response.data.products)
            })
            .catch(function (error) {
                console.log("error", error)
            })
    }

    const deleteRecord = (id) => {
        //  console.log(id)
        axios.delete(`https://dummyjson.com/products/${id}`, {
            headers: {
                Authorization: asynValues?.token,
                'Content-Type': 'application/json'
            },

        }).then(function (response) {
            //  console.log(JSON.stringify(response?.status))
            if (response?.status == '200') {
                showMessage({
                    message: JSON.stringify(response?.data?.deletedOn),
                    type: 'success',
                    floating: true,
                    backgroundColor: colors.lightBlue,

                });
            }


            // console.log(JSON.stringify(response.data))
        })
            .catch(function (error) {
                console.log(error);
            });
        getRecord()
    }
    const renderfunction = ({ item }) => {


        //   console.log(item)
        return (
            <View>

                <View style={styles.renderMainView}>
                    <Image source={{ uri: item.thumbnail }} style={styles.renderimage} />
                    <View >
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.boldFont}>Brand</Text>
                            <Text numberOfLines={1} style={styles.blueFont}>{item.brand}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={styles.boldFont}>Titel</Text>
                            <Text numberOfLines={1} style={styles.blueFont}>{item.title}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={styles.boldFont}>Price</Text>
                            <Text numberOfLines={1} style={styles.blueFont}>{item.price}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={styles.boldFont}>Raiting</Text>
                            <Text numberOfLines={1} style={styles.blueFont}>{item.rating}</Text>
                        </View>
                    </View>
                    <View style={styles.actionButtonsView}>
                        <TouchableOpacity onPress={() => deleteRecord(item.id)}>
                            <AntDesign name='delete' size={25} color={colors.lightBlue} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SingelRecord', item)}>
                            <Entypo name='arrow-bold-right' size={25} color={colors.lightBlue} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Update', item)}>
                            <MaterialCommunityIcons name='circle-edit-outline' size={25} color={colors.lightBlue} />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={asyncRecord?.name} img={asyncRecord?.image} />
            <FlatList data={record} renderItem={renderfunction} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }} />
            <View style={{ position: "absolute", bottom: hp(10), right: wp(15) }}>
                <TouchableOpacity style={{ backgroundColor: colors.lightBlue, justifyContent: "center", alignItems: 'center', padding: 20, borderRadius: 100 }}
                    onPress={() => navigation.navigate('Insert')}>
                    <AntDesign name='plus' size={25} color={colors.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;