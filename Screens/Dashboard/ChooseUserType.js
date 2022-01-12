import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { Box, Center, PaddingBox, VerticalBox } from '../../component/AlignBox';
import { Styles } from '../../component/Styles';
import { color } from '../../component/theme';

const ChooseUserType = props => {
  return (
    <SafeAreaView style={Styles.container}>
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
            <TouchableOpacity style={styles.conBox} onPress={()=>props.navigation.navigate("RegistrationFormScreen")}>
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
            <View style={styles.conBox}>
                <Image
                    source={require('../../assets/patient.png')}
                    style={{width:30, height:30, }}
                />
                <VerticalBox style={10} />
                <Text style={[Styles.text18SN,Styles.white]}>
                    Patient
                </Text>
            </View>
        </Box>
    </SafeAreaView>
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
