import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image,  } from 'react-native'
import { color } from '../component/theme'

const TopArrow = (props) => {
    return (
        <TouchableOpacity onPress={() =>{props.navigation.goBack()}} style={[styles.arrowStyle,props.style]}>
            <Image source={require("../assets/back_white.png")} style={{ height: 25, width: 25, tintColor:props.color?props.color:color.white }} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default TopArrow

const styles = StyleSheet.create({
    arrowStyle:{
        position:"absolute",
        top:0,
        paddingHorizontal:10,
        paddingVertical:10,
        // backgroundColor:color.black,
        borderRadius:30,
        zIndex:10,
    },
})
