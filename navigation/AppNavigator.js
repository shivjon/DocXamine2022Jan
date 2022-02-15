import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, Image, Platform} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

import { color } from '../component/theme';
import {Styles} from '../component/Styles';
import { PaddingBox } from '../component/AlignBox';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/Authentication/LoginScreen';
import ChooseUserType from '../Screens/Dashboard/ChooseUserType';
import RegistrationFormScreen from '../Screens/Dashboard/RegistrationFormScreen';
import SlotGanrator from '../Screens/DoctorScreen/SlotGanrator';
import DashboardDoctor from '../Screens/DoctorScreen/DashboardDoctor';
import ViewAppoinment from '../Screens/DoctorScreen/ViewAppoinment';
import SettingScreen from '../Screens/DoctorScreen/SettingScreen';
import SlotScreen from '../Screens/DoctorScreen/SlotScreen';




   // activeTintColor: color.primary,
        // inactiveTintColor: color.black,

function HomeStack() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { position: 'absolute',borderTopRightRadius:20, borderTopLeftRadius:20, backgroundColor:"#F4F4F4",
      height:Platform.OS=="ios"? 90 :55,paddingHorizontal:5,
    },
    tabBarShowLabel:false,
 
      headerShown: false,
    }}

      >
      <Tab.Screen
        name="Homes"
        component={DashboardDoctor}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused,  size}) => (
            <View style={styles.tabStyle}>
             <Feather name="home" size={24} color="black" />
            <PaddingBox style={2} />
            <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor, fontSize:wp(2.7) }]}>Home</Text>
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Appointments"
        component={ViewAppoinment}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({focused,  size}) => (
            <View style={styles.tabStyle}>
           <AntDesign name="carryout" size={24} color="black" />
            <PaddingBox style={2} />
            <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor, fontSize:wp(2.7) }]}>Appointments</Text>
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Slot"
        component={SlotScreen}
        options={{
          tabBarLabel: 'Slot',
          tabBarIcon: ({focused,  size}) => (
            <View style={styles.tabStyle}>
           <Entypo name="time-slot" size={24} color="black" />
            <PaddingBox style={2} />
            <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor, fontSize:wp(2.7) }]}>Slot</Text>
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused,  size}) => (
            <View style={styles.tabStyle}>
             <AntDesign name="setting" size={24} color="black" />
            <PaddingBox style={2} />
            <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor, fontSize:wp(2.7) }]}>Settings</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    alignItems:'center',justifyContent:'center',
},
customStyle:{
  alignItems:'center',justifyContent:'center',
},
imageStyle1:{width:20, height:20, tintColor:color.navColor},
imageStyle:{width:20, height:20, tintColor:color.dSecond}

});



export const AppNavigator = props => {
  
  return (
    <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"SplashScreen"}
        >
       <Stack.Screen name="SplashScreen" component={SplashScreen} />
       <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="ChooseUserType" component={ChooseUserType} />
       <Stack.Screen name="RegistrationFormScreen" component={RegistrationFormScreen} />
       <Stack.Screen name="SlotGanrator" component={SlotGanrator} />
       <Stack.Screen name="HomeStack" component={HomeStack} />
       {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu} /> */}
       {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu} /> */}
       {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
