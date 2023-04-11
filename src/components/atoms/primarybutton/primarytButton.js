import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import fonts from '../../../config/fontSize'
const PrimaryButton = ({
    onPress = () => { },
    btnStyle,
    btnTitle = '',
    textStyle,
    loader = false

}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.componentContainer, ...btnStyle }}>
            {loader == false ?
                <Text style={{ ...styles.componentTextStyle, ...textStyle }}>
                    {btnTitle}
                </Text>
                :
                <ActivityIndicator size={'large'} color={colors.white} style={{ alignSelf: "center" }} />
            }
        </TouchableOpacity >
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    componentContainer: {
        height: hp(7),
        width: wp(85),
        backgroundColor: colors.lightBlue,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center'
    },
    componentTextStyle: {
        fontSize: fonts.font17,
        textAlign: "center",
        fontWeight: '600',
        color: colors.white,
    }

})