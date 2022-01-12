import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid,TouchableOpacity } from 'react-native';
import { Box, VerticalBox, PaddingBox } from '../component/AlignBox';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { color } from '../component/theme';
import { Styles } from '../component/Styles';
import CountryPicker from 'react-native-country-picker-modal';
import {useDispatch, useSelector} from 'react-redux';
import * as mainAction from "../redux/actions/mainAction";
import * as authAction from "../redux/actions/authAction";
import Loader from '../component/Loader';

const HomeHeader = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.user.body)
    const [countryCode, setCountryCode] = useState('IN');
    const [country, setCountry] = useState('91');
    const [load, setload] = useState(true);

    useEffect(() => {
        console.log('====================================');
        console.log(token);
        console.log('====================================');
        onGetCountry();
    }, [])

    const onGetCountry = ()=>{
        setload(true);
        try{
              var value={
            userID:token.userData.ID
        }
         dispatch(authAction.GetCurrencyDetails(value)).then((result)=>{
            if(result.status == 200){
                setCountryCode(result.body.UserCountryCode);
              var sign =  result.body.UserCountryCode == "IN" ? "₹" : "$"
                dispatch(authAction.CurrencySign(sign))
                setload(false);
            }else{
                setload(false);
                ToastAndroid.show("Something went wrong. Please try Again", ToastAndroid.SHORT)
            }
            console.log('====================================');
            console.log(result);
            console.log('====================================');
        })
        }catch(error){

        }
      
    }

    const onSelect = country => {
        setload(true);
        console.log('====================================');
        console.log(country.cca2);
        console.log('====================================');
      
        onUpdateCountryCode(country.cca2, country)
      };


      const onUpdateCountryCode = (code, country)=>{
        try{
              var value={
            userID:token.userData.ID,
            "code":code
        }
         dispatch(mainAction.UpdateCountryCode(value)).then((result)=>{
           if(result.status == 200){
            setCountryCode(country.cca2);
    
            // setCountryCode(country.callingCode.toString())
            setCountry(country.callingCode.toString());
            onGetCountry()
           }else{
            setload(false);
            ToastAndroid.show("Something went wrong. Please try Again", ToastAndroid.SHORT)
        }
        })
        }catch(error){
            setload(false);
            ToastAndroid.show("Something went wrong. Please try Again", ToastAndroid.SHORT)
        }
      
    }
    return (
        <Box style={styles.conatiner}>
            <Loader loading={load} />
            <View style={{width:'100%'}}>
            <View style={[Styles.alignbetween,]}>
                <View>
                    <View style={Styles.row}>
                            <View style={styles.eve}>
                               <Image
                                source={require('../assets/user.png')}
                                style={{width:40, height:40}}
                                resizeMode="contain"
                                /> 
                            </View>
                        <View style={[Styles.row, styles.flatview]}>
                            <VerticalBox style={10} />
                        <CountryPicker
                            {...{
                                countryCode,
                                onSelect,
                            }}
                            withCallingCode
                            withFilter
                            containerButtonStyle={{size:10, flagSize:10}}
                            theme={{ fontSize: 20, flagSize: 10 }}
                            />
                            <Image
                                source={require('../assets/arrowdown.png')}
                                style={{width:10, height:10}}
                                resizeMode="contain"
                            />
                            <VerticalBox style={4} />
                        </View>
                    </View>
                
                </View>
                <View style={Styles.row}>
                    <Image
                        source={require('../assets/Vector.png')}
                        style={{width:20, height:20}}
                        resizeMode="contain"
                    />
                    
                    <VerticalBox style={5} />
                     <Image
                        source={require('../assets/shop.png')}
                        style={{width:20, height:20}}
                        resizeMode="contain"
                    />
                    <VerticalBox style={5} />
                     <Image
                        source={require('../assets/notification.png')}
                        style={{width:20, height:20}}
                        resizeMode="contain"
                    />
                     <VerticalBox style={5} />
                     <TouchableOpacity style={styles.buttonRed} onPress={()=>props.navigation.navigate("BroadcastLiveStreaming")}>
                        <VerticalBox style={1} />
                        <Entypo name="dot-single" size={12} color={color.white}/>
                        <VerticalBox style={3} />
                            <Text style={[Styles.text10M, {color:color.white}]}>Live</Text>
                            <VerticalBox style={3} />
                     </TouchableOpacity>
                </View>
            </View>
                <PaddingBox style={5} />
                    <Text style={[Styles.text10M, {color:color.black}]}>
                        {token.userData.Name}
                    </Text>
            </View>
        </Box>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    conatiner:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:-50,
        paddingVertical:10,
        paddingHorizontal:20,
        // backgroundColor:color.green
    },
    eve:{
        elevation:1
    },
    buttonRed:{
        paddingHorizontal:0,
        backgroundColor:color.red,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:20,
    },
    flatview:{
        paddingVertical:0,
        backgroundColor:color.white,
      borderRadius:30,
        marginLeft:-15,
    },
})
