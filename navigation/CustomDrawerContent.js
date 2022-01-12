import React,{useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { Divider } from 'react-native-paper';
import { color } from '../component/theme';
import { Box, PaddingBox } from '../component/AlignBox';
import { Styles } from '../component/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawerContent = props => {
  // const [, set] = useState(initialState)
  useEffect(() => {
  console.log('====================================');
  console.log("sdadsasd");
  console.log('====================================');
  }, [])

  const createTwoButtonAlert = () =>
  Alert.alert(
    "Log Out",
    "Are you sure you want to log out.",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Yes", onPress: () => clearAllData() }
    ]
  );

  const  clearAllData = () => {
    AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() =>console.log('d'));
        props.navigation.navigate("LoginScreen");
      }

  return (
    <SafeAreaView>
      <ScrollView>
        <Box style={styles.headerBox}>
          <View style={styles.imageView}>
            <FontAwesome5 name="user" size={30} color={color.greyMedium} />
          </View>
          <PaddingBox style={10} />
          <View style={Styles.rowAlign}>
            {/* <Text style={[Styles.text14R,{color:color.white}]}>User</Text> */}
            {/* <SimpleLineIcons name="arrow-right" size={12} color={color.white} onPress={()=>props.navigation.navigate("AuthenticationStack")} style={{paddingHorizontal:10}} /> */}
          </View>
          <PaddingBox style={5} />
        </Box>
        <View>
            <Box style={styles.paddVertical}>
                <AntDesign name="home" size={18}
                    color={color.greyMedium} />
                <Text style={[Styles.text16B, {color:color.greyMedium, paddingHorizontal:20,}]} onPress={()=>props.navigation.navigate("HomeScreen")}>
                   Home
                </Text>
            </Box>
            <Divider />
            <Box style={styles.paddVertical}>
                <Entypo name="dropbox"   size={18}
                    color={color.greyMedium} />
                <Text style={[Styles.text16B, {color:color.greyMedium, paddingHorizontal:20,}]} onPress={()=>props.navigation.navigate("CreateEvent")}>
                    Create Live Event
                </Text>
            </Box>
            <Divider />
            <Box style={styles.paddVertical}>
                    <MaterialIcons name="event" size={18}
                    color={color.greyMedium}  />
                <Text style={[Styles.text16B, {color:color.greyMedium, paddingHorizontal:20,}]} onPress={()=>props.navigation.navigate("EventDetails")}>
                    Live Event Detials
                </Text>
            </Box>
            <Divider />
            <Box style={styles.paddVertical}>
                    <Feather name="log-in"size={18}
                    color={color.greyMedium}  />
           
                <Text style={[Styles.text16B, {color:color.greyMedium, paddingHorizontal:20,}]} onPress={()=>createTwoButtonAlert()}>
                    Logout
                </Text>
            </Box>
            <Divider />
            {/* <Box style={styles.listView}>
                <PaddingBox style={20} />
                <Text style={[Styles.text16R,  {color:color.greyMedium}]}>
                    FAQs
                </Text>
                <PaddingBox style={20}   />
                <Text style={[Styles.text16R,  {color:color.greyMedium, }]}>
                    CONTACT US
                </Text>
                <PaddingBox  style={20}  />
                <Text style={[Styles.text16R,  {color:color.greyMedium, }]}>
                    LEGAL
                </Text>
                <PaddingBox style={20} />
            </Box> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  headerBox: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    paddingRight:10,
    backgroundColor: color.dSecond,
    // opacity: .5,
    justifyContent: 'flex-end',
  },
  paddVertical:{
      paddingVertical:20,
      flexDirection:"row",
  },
  listView:{
      paddingHorizontal:65,
  },
  imageView: {
    width: 70,
    height: 70,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
