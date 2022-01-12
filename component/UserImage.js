import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const UserImage = (props) => {
    return (
        <View>
            <Image
                source={require('../assets/user.png')}
                style={[{width:wp(30), height:wp(30)}, props.style]}
                resizeMode="contain"
            />
        </View>
    )
}

export default UserImage

const styles = StyleSheet.create({})
