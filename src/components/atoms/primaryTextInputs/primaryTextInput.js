import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../config/colors'
import fonts from '../../../config/fontSize'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import fontFamily from '../../../assets/fontsFamily'


const PrimaryTextInput = ({
    onchangetext = () => { },
    placeholder = 'Write Here',
    outerView,
    securetextinput = false,
    placeholdertextcolor = colors.black,
    icon = '',
    showPassword = () => { },
    keyBoardType,
    value = 'ok',


}) => {

    return (
        <View style={{ ...styles.componentContainer, ...outerView }}>
            <TextInput value={value} keyboardType={keyBoardType} placeholderTextColor={placeholdertextcolor} secureTextEntry={securetextinput} placeholder={placeholder} onChangeText={onchangetext} style={{ ...styles.componentTextInputStyle }} />
            {icon != '' ?
                <TouchableOpacity style={{ alignSelf: "center", right: 10 }} onPress={() => showPassword()}>
                    {icon}
                </TouchableOpacity>
                :
                null}
        </View>

    )
}

export default PrimaryTextInput;

const styles = StyleSheet.create({
    componentContainer: {
        height: hp(7),
        width: wp(85),
        borderRadius: 10,
        backgroundColor: colors.gray,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",


    },
    componentTextInputStyle: {
        fontSize: fonts.font14,
        color: colors.black,
        fontFamily: fontFamily.ProximaNovaSemibold,
        fontWeight: "500",
        width: wp(80),
        padding: 12,
    },
})