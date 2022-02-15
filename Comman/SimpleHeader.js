import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { color } from '../component/theme';
import { Styles } from '../component/Styles';

const SimpleHeader = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={[Styles.text16B,{color:color.white}]}>{name}</Text>
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
    container:{
        height:50, 
        backgroundColor:color.primary,
        width:"100%",
        alignItems:'center',justifyContent:'center'
    },
});
