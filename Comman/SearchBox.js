import React from 'react';
import { TextInput } from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Styles } from '../component/Styles';
import { color } from '../component/theme';

const SearchBox = props => {
  return (
    <View style={styles.container}>
        <TextInput 
            placeholder='Search'
            style={[styles.inputStyle,Styles.text18M]}
        />
        <Image
            source={require('../assets/icon/search_icon.png')}
            style={{width:30, height:30, position:"absolute", right:10 }}
        />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:55,
        // backgroundColor:color.black,
        borderRadius:25,
        borderWidth:1,
        alignItems:"center",
        borderColor: color.otpColor,
        flexDirection:"row",
    },
    inputStyle:{
        width:"80%",
        // backgroundColor:color.black,
        // paddingHorizontal:20,
        marginHorizontal:10,
    },
});

