import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color } from './theme';
const UserImage = ({ image, onHandleChangeImage, style }) => {
    return (
        <TouchableOpacity onPress={() => onHandleChangeImage()}>
            {image ?
                <Image
                    source={{ uri: image }}
                    style={[styles.image, style]}
                />
                :
                <Image
                    source={require('../assets/user.png')}
                    style={[styles.image, style]}
                />
            }
        </TouchableOpacity>
    )
}

export default UserImage

const styles = StyleSheet.create({
    image: { width: wp(30), height: wp(30), borderRadius: wp(15), backgroundColor:color.greyLite }
})
