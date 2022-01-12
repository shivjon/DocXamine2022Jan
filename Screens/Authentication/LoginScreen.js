import React from 'react'
import { ScrollView, StatusBar, TextInput } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { Box, Center, PaddingBox } from '../../component/AlignBox'
import { Styles } from '../../component/Styles'
import { color } from '../../component/theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInputBox } from '../../component/TextInputBox'
import Entypo from "react-native-vector-icons/Entypo";
import Button from '../../component/Button'

const LoginScreen = (props) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor={color.primary} />
      <ScrollView>
        <PaddingBox style={50} />
        <Center>
          <Text style={[Styles.text22B,{color:color.primary, fontWeight:"bold"}]}>DocXamine</Text>
          <Image
            source={require('../../assets/login.png')}
            style={{width:wp('100%'), height:hp(35)}}
            resizeMode="contain"
          />
        </Center>
        <Box style={styles.inputBox}>
          <TextInputBox >
            <Entypo name="mobile" size={20} color={color.primary} />
            <TextInput 
              placeholder='+91 XXXXXXXXXX'
              style={styles.inputStyle}
            />
          </TextInputBox>

          <PaddingBox style={50} />
          <Button 
              name="Login"
              onPress={()=>props.navigation.navigate("ChooseUserType")}
          />
          <PaddingBox style={30} />
          <Center>
            <Text style={Styles.text15B}>
              Or Login with
            </Text>
            <PaddingBox style={20} />
            <Image
              source={require('../../assets/google.png')}
              style={{width:40, height:40}}
              resizeMode="contain"
            />
          </Center>
          
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  inputBox:{
    paddingHorizontal:30
  },
  inputStyle:{
    width:"92%"
  },
})
