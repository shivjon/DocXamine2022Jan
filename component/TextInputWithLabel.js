import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Box, PaddingBox } from './AlignBox'
import { Styles } from './Styles';
import { color } from "./theme";


const TextInputWithLabel = (props) => {
    return (
        <Box style={styles.inputContainer}>
            <Text style={[Styles.text15B,{color:color.primary}]}>
                {props.label}
            </Text>
            <PaddingBox style={10} />
            <View style={styles.inputBorder}>
               {props.children}
            </View>
        </Box>
    )
}

export default TextInputWithLabel

const styles = StyleSheet.create({
    inputContainer:{

    },
    inputBorder:{
        borderRadius:15,
        borderWidth:2,
        borderColor:color.primary,
        height: hp(7),
        alignItems:"center",
        paddingHorizontal:10,
        flexDirection:"row"
    },
})
