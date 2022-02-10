import React, { useState, useEffect } from 'react'
import { ScrollView, StatusBar, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { Box, Center, PaddingBox, Right, VerticalBox } from '../../component/AlignBox'
import { Styles } from '../../component/Styles'
import { color } from '../../component/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInputBox } from '../../component/TextInputBox'
import Entypo from "react-native-vector-icons/Entypo";
import Button from '../../component/Button'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import * as authAction from "../../redux/actions/authAction";
import * as mainAction from "../../redux/actions/mainAction";
import { useDispatch } from 'react-redux';
import AntDesign from "react-native-vector-icons/AntDesign"
import Loader from '../../component/Loader';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Timer, Countdown } from 'react-native-element-timer';

GoogleSignin.configure({
  webClientId: '469300286581-ba087nu2cfhbo4vosurpk2a75kdbgpd2.apps.googleusercontent.com',
});

const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const [isShowOtp, setisShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setphone] = useState("");
  const [otp, setotp] = useState("");
  const [idFirst, setidFirst] = useState(false);
  const [istimer, setistimer] = useState(true);
  const [count, setcount] = useState("");

  useEffect(() => {
    AsyncStorage.setItem(
      'profile', "1"
    );
  }, []);
  

  async function onGoogleButtonPress() {
    // setLoading(true);
    const { idToken } = await GoogleSignin.signIn();
    // setLoading(false)
    console.log(idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    setLoading(true);
    var value = await auth().signInWithCredential(googleCredential);
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
          // 
          var value = result.message
          setLoading(false)
          if (result.status == 200) {
            AsyncStorage.setItem(
              'token', JSON.stringify(result)
            );
            // props.navigation.navigate("HomeStack")
            onCheckPendingDetails(result.data, result);
            ToastAndroid.show("Login Successfully.", ToastAndroid.LONG)
          } else if (result.status == 201) {
            AsyncStorage.setItem(
              'token', JSON.stringify(result)
            );
            ToastAndroid.show("Login Successfully.", ToastAndroid.LONG)

            props.navigation.navigate("ChooseUserType")
          } else {
            ToastAndroid.show("Login Failed.", ToastAndroid.LONG)
          }

        })
        .catch(err => {
          ToastAndroid.show(err, ToastAndroid.LONG)
          setLoading(false)
          console.log(err)
        })
    }

    console.log(value.additionalUserInfo.isNewUser)
  }

  const onHandleLogin = () => {
    if (phone == "") {
      ToastAndroid.show("Please Enter Phone number", ToastAndroid.LONG);
      return
    }
    setLoading(true)

    var val = {
      "email": "",
      "phone": phone,
      "social_key": "",
      "signup_type": "phone"
    }
    dispatch(authAction.registerUser(val))
      .then(result => {
        console.log(result)
        if (result.status == 200) {
          setisShowOtp(true);
          setistimer(true)
          ToastAndroid.show("Send OTP Successfully.", ToastAndroid.LONG);
        } else if (result.status == 201) {
          setisShowOtp(true);
          setidFirst(true);
          ToastAndroid.show("Send OTP Successfully.", ToastAndroid.LONG);
        } else {
          ToastAndroid.show("Send OTP Failed.", ToastAndroid.LONG);

        }
        setLoading(false)
      })
      .catch(err => {
        ToastAndroid.show(err, ToastAndroid.LONG)
        setLoading(false)
        console.log(err)
      })

  }

  const onHandleverifyOtp = () => {
    setLoading(true)
    var val = {
      "phone": phone,
      "otp": otp,
    }
    dispatch(authAction.verifyOtp(val))
      .then(result => {
        console.log(result)
        if (result.status == 200) {
          if (idFirst) {
            props.navigation.navigate("ChooseUserType")
          } else {
            // props.navigation.navigate("HomeStack")
            AsyncStorage.setItem(
              'token', JSON.stringify(value)
            );
            onCheckPendingDetails(result.data, result);
          }
        } else {
          ToastAndroid.show("Login failed.", ToastAndroid.LONG);

        }
        setLoading(false);
      })
      .catch(err => {
        ToastAndroid.show(err, ToastAndroid.LONG)
        setLoading(false)
        console.log(err)
      })
  }



  const onHandleResendOtp = () => {
    setLoading(true)

    var val = {
      "phone": phone,
    }
    dispatch(authAction.resendOTP(val))
      .then(result => {
        console.log(result)
        if (result.status == 200) {
          setistimer(true)
          ToastAndroid.show("Resend OTP Successfully.", ToastAndroid.LONG);
        }
        setLoading(false);
      })
      .catch(err => {
        ToastAndroid.show(err, ToastAndroid.LONG)
        setLoading(false)
        console.log(err)
      })
  }


  const onCheckPendingDetails = (token, value) => {
    console.log("***********",token, value);
    dispatch(mainAction.completionChecks(token.token))
      .then(result => {
        if (result.status == 200) {
          console.log(result);
          let data = result.body;
          // if (data.userIs == "doctor") {
            if (data.docProfileCreated == 0) {
              AsyncStorage.setItem(
                'profile', "1"
              );
              props.navigation.navigate("RegistrationFormScreen")
            } else if (data.slotsCount == 0) {
              AsyncStorage.setItem(
                'profile', "1"
              );
              props.navigation.navigate("SlotGanrator")
            } else {
              props.navigation.navigate("HomeStack")
            }
          // } else {

          // }
        } else {

        }
      })
      .catch(err => {
        ToastAndroid.show(err, ToastAndroid.LONG)
        setLoading(false)
        console.log(err)
      })

  }
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor={color.primary} />
      <Loader loading={loading} />
      <ScrollView>
        <PaddingBox style={50} />
        <Center>
          <Text style={[Styles.text22B, { color: color.primary, fontWeight: "bold" }]}>DocXamine</Text>
          <Image
            source={require('../../assets/login.png')}
            style={{ width: wp('100%'), height: hp(35) }}
            resizeMode="contain"
          />
        </Center>
        <Box style={styles.inputBox}>
          <TextInputBox >
            <Entypo name="mobile" size={20} color={color.primary} />
            <VerticalBox style={10} />
            <Text style={Styles.text16B}>
              +91
            </Text>
            <VerticalBox style={3} />
            <TextInput
              maxLength={10}
              placeholder='XXXXXXXXX'
              style={[styles.inputStyle, Styles.text16B]}
              value={phone}
              onChangeText={(t) => setphone(t)}
              keyboardType="number-pad"
            />
          </TextInputBox>
          {
            isShowOtp &&
            <>
              <PaddingBox style={20} />
              <TextInputBox >
                <AntDesign name="lock" size={24} color={color.primary} />
                <VerticalBox style={10} />
                <TextInput
                  placeholder='OTPXXXXX'
                  style={[styles.inputStyle, { width: wp(74) }, Styles.text16B]}
                  value={otp}
                  onChangeText={(t) => setotp(t)}
                  keyboardType="number-pad"
                />
              </TextInputBox>

              <PaddingBox style={20} />
              {istimer ? (
                <Right style={{ flexDirection: "row", }}>
                  <Text style={Styles.text12M}>
                    00 : {count.toString().length == 1 ? "0" : null}
                  </Text>
                  <Countdown
                    // ref={countdownRef}
                    // style={styles.timer}
                    autoStart={istimer}
                    textStyle={Styles.text12M}
                    initialSeconds={30}
                    onTimes={e => { setcount(e) }}
                    onPause={e => { }}
                    onEnd={(e) => { setistimer(false); setcount("") }}
                  />
                  <VerticalBox style={2} />
                  <Entypo name="time-slot" size={10} color={'#767676'} />
                </Right>
              ) :
                <Right>
                  <TouchableOpacity onPress={() => onHandleResendOtp()}>
                    <Text style={[Styles.text14B, { color: color.green }]}>
                      Resend OTP
                    </Text>
                  </TouchableOpacity>
                </Right>
              }
            </>
          }
          <PaddingBox style={50} />

          <Button
            name="Login"
            onPress={() => isShowOtp ? onHandleverifyOtp() : onHandleLogin()}
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
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Center>
          <PaddingBox style={20} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  inputBox: {
    paddingHorizontal: 30
  },
  inputStyle: {
    width: wp("65%"),
    padding: 0
  },
})
