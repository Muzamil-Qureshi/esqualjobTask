import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './index-styles'
import Header from '../../components/atoms/header/header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../config/colors'
const SingelRecord = ({ navigation, route }) => {
    console.log(route?.params?.thumbnail)
    return (
        <SafeAreaView style={styles.container}>
            <Header img={''} title='Singel Record' icon={<TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name='arrow-back' size={25} color={colors.lightBlue} /></TouchableOpacity>} />
            <Image source={{ uri: route?.params?.thumbnail }} style={styles.img} />

            <View style={styles.outerView}>
                <Text style={styles.boldheading}>category</Text>
                <Text style={styles.recordHeading}>{route?.params?.category}</Text>
            </View>
            <View style={styles.outerView}>
                <Text style={styles.boldheading}>Brand</Text>
                <Text style={styles.recordHeading}>{route?.params?.brand}</Text>
            </View>
            <View style={styles.outerView}>
                <Text style={styles.boldheading}>Description</Text>
                <Text style={styles.recordHeading}>{route?.params?.description}</Text>
            </View>
            <View style={styles.outerView}>
                <Text style={styles.boldheading}>Price</Text>
                <Text style={styles.recordHeading}>{route?.params?.price}</Text>
            </View>
            <View style={styles.outerView}>
                <Text style={styles.boldheading}>Title</Text>
                <Text style={styles.recordHeading}>{route?.params?.title}</Text>
            </View>

        </SafeAreaView>
    )
}

export default SingelRecord;