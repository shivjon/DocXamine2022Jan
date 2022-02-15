import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image,  TouchableOpacity, ToastAndroid} from 'react-native';
import { Box, Center, PaddingBox, VerticalBox } from '../../component/AlignBox';
import { Styles } from '../../component/Styles';
import { color } from '../../component/theme';
import * as authAction from "../../redux/actions/authAction";
import { useDispatch, useSelector } from 'react-redux';

const ChooseUserType = props => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const token = useSelector(state => state.auth.user.data.token);

    useEffect(() => {
            console.log(token);
    }, []);
    

    const onWhoAreYou = (value) =>{
        setLoading(true)
        var val = {
          "who": value,
        }
        dispatch(authAction.whoAreYou(val, token))
          .then(result => {
            console.log(result)
            if(result.status == 200){
              props.navigation.navigate("SlotGanrator");
            }else{
              ToastAndroid.show("Something went wrong.", ToastAndroid.LONG);
            }
            setLoading(false);
          })
          .catch(err => {
            ToastAndroid.show(err, ToastAndroid.LONG)
            setLoading(false)
            console.log(err)
          })
      }
    
  return (
    <View style={Styles.container}>
        <View style={styles.headerView}>
            <Image
                source={require('../../assets/logo.png')}
                style={{width:150, height:150}}
            />
        </View>
        <PaddingBox style={50} />
        <Box>
            <Center>
                <Text style={[Styles.text20R,{fontWeight:"bold"}]}>
                Are you a ?
                </Text>
            </Center>
            
            <PaddingBox style={40} />
            <TouchableOpacity style={styles.conBox} onPress={()=>onWhoAreYou("doctor")}>
                <Image
                    source={require('../../assets/doctor.png')}
                    style={{width:30, height:30, borderRadius:50}}
                />
                <VerticalBox style={10} />
                <Text style={[Styles.text18SN,Styles.white]}>
                    Doctor
                </Text>
            </TouchableOpacity>
            <PaddingBox style={30} />
            <TouchableOpacity style={styles.conBox} onPress={()=>ToastAndroid.show("Coming soon..", ToastAndroid.LONG)}>
                <Image
                    source={require('../../assets/patient.png')}
                    style={{width:30, height:30, }}
                />
                <VerticalBox style={10} />
                <Text style={[Styles.text18SN,Styles.white]}>
                    Patient
                </Text>
            </TouchableOpacity>
        </Box>
    </View>
  );
};

export default ChooseUserType;

const styles = StyleSheet.create({
    headerView:{
        backgroundColor:color.primary,
        paddingHorizontal:20,
        paddingVertical:25,
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100,
        elevation:20,
        shadowColor:color.primary,
        shadowOffset:5,
        alignItems:"center",
    },
    conBox:{
       width:"100%",
       backgroundColor:color.lightPrimay,
       padding:10,
       paddingHorizontal:20,
       borderRadius:15,
       flexDirection:"row",
       alignItems:"center",
       elevation:5,
    },
});
