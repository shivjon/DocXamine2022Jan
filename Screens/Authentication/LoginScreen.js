import React from 'react'
import { ScrollView, StatusBar, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { Box, Center, PaddingBox } from '../../component/AlignBox'
import { Styles } from '../../component/Styles'
import { color } from '../../component/theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInputBox } from '../../component/TextInputBox'
import Entypo from "react-native-vector-icons/Entypo";
import Button from '../../component/Button'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import * as authAction from "../../redux/actions/authAction";
import { useDispatch } from 'react-redux';
GoogleSignin.configure({
  webClientId: '469300286581-ba087nu2cfhbo4vosurpk2a75kdbgpd2.apps.googleusercontent.com',
});

const LoginScreen = (props) => {
      const dispatch = useDispatch();


  async function onGoogleButtonPress() {
    // Get the users ID token
    // setLoading(true);
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    // setLoading(false)
    console.log(idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // setLoading(true);
    // Sign-in the user with the credential
    var value = await auth().signInWithCredential(googleCredential);
    //  props.navigation.navigate("DashboardStack")
    if (value) {

        var val = {
            "email": value.user.email,
            "phone": "",
            "social_key": value.user.uid,
            "signup_type": "google"
        }
        console.log(value);
        dispatch(authAction.registerUser(val))
            .then(result => {
                console.log(result)
                // New user. login successful.
                // var value = result.message
                // setLoading(false)
                // if (result.data.status == 200 ) {
                //     // AsyncStorage.setItem(
                //     //     'token', JSON.stringify(result)
                //     // );
                //     ToastAndroid.show(value, ToastAndroid.LONG)

                //     // props.navigation.navigate("DashboardStack")
                // } else {
                //     ToastAndroid.show(value, ToastAndroid.LONG)
                // }


            })
            .catch(err => {
                ToastAndroid.show(err, ToastAndroid.LONG)
                setLoading(false)
                console.log(err)
            })
    }

    console.log(value.additionalUserInfo.isNewUser)
}


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
            <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
                <Image
              source={require('../../assets/google.png')}
              style={{width:40, height:40}}
              resizeMode="contain"
            />
            </TouchableOpacity>
          
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
