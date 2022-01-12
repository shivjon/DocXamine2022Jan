import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Box, VerticalBox } from './AlignBox';
import { Styles } from './Styles';
import { color } from './theme';


const HeaderLeftArrow = (props) => {
    return (
        <Box style={styles.container}>
            <View  style={styles.arrow} >
                <AntDesign name="arrowleft" size={24} color="black" style={styles.arrowView} onPress={()=>props.navigation.goBack()} />
                <VerticalBox style={2} />
                {props.name &&
                <Text style={[Styles.text16B,styles.Text]}>
                    {props.name}
                </Text>
                }
            </View>
        </Box>
    )
}

export default HeaderLeftArrow

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:0,
        flex:0,
        backgroundColor:color.white,
        height:50,
        justifyContent:'center'
    },
    arrowView:{
        paddingHorizontal:20,
    },
    Text:{
        textAlign:"center",
        alignSelf:"center",
    },
    arrow:{
        flexDirection:"row",
    }
})
