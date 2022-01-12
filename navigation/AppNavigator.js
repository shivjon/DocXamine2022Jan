import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

import { color } from '../component/theme';
import {Styles} from '../component/Styles';
import { PaddingBox } from '../component/AlignBox';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/Authentication/LoginScreen';
import ChooseUserType from '../Screens/Dashboard/ChooseUserType';
import RegistrationFormScreen from '../Screens/Dashboard/RegistrationFormScreen';
import SlotGanrator from '../Screens/DoctorScreen/SlotGanrator';



   // activeTintColor: color.primary,
        // inactiveTintColor: color.black,

// function HomeStack() {
//   return (
//     <Tab.Navigator
//     screenOptions={{
//       tabBarStyle: { position: 'absolute',borderTopRightRadius:20, borderTopLeftRadius:20, backgroundColor:"#F4F4F4",
//       height:55,paddingHorizontal:5,
//     },
//     tabBarShowLabel:false,
 
//       headerShown: false,
//     }}

//       >
//       <Tab.Screen
//         name="Homes"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({focused,  size}) => (
//             <View style={styles.tabStyle}>
//               <Image
//                   source={require('../assets/Home_press.png')}
//                   style={focused ? styles.imageStyle: styles.imageStyle1}
//                   resizeMode={"contain"}
//                 />
//             <PaddingBox style={2} />
//             <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor, fontSize:wp(2.7) }]}>Home</Text>
//             </View>
//           ),
//         }}
//       />
 
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarVisible: false,
//           tabBarLabel: 'Categories',
//           tabBarIcon: ({focused,  size}) => (
//             <View style={styles.tabStyle}>
//              <Image
//                   source={require('../assets/Profile.png')}
//                   style={focused ? styles.imageStyle: styles.imageStyle1}
//                   resizeMode={"contain"}
//                 />
//             <PaddingBox style={2} />
//           <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor,fontSize:wp(2.7) }]}>Profile</Text>
//           </View>
//           ),
        
//         }}
//       />
//        <Tab.Screen
//         name="Darshan"
//         component={ProfileScreen}
//         options={{
//           tabBarVisible: false,
//           tabBarLabel: 'Categories',
//           tabBarIcon: ({focused,  size}) => (
//             <View style={styles.customStyle}>
//               <View style={{
//                 marginTop:-70,
              
//                 borderRadius:25,
//                 alignItems:'center',justifyContent:'center'
//               }}>
//                 <Image
//                   source={require('../assets/vip_icon.png')}
//                   style={{width:70, height:70}}
//                 />
//               </View>
//           <Text style={[Styles.text10M, {position:"absolute", bottom:-20, color:focused ?  color.dSecond :color.navColor, fontSize:wp(2.7)}]}>Darshan</Text>
//           </View>
//           ),
        
//         }}
//       />
//        <Tab.Screen
//         name="order"
//         component={ProfileScreen}
//         options={{
//           tabBarVisible: false,
//           tabBarLabel: 'Categories',
//           tabBarIcon: ({focused, size}) => (
//             <View style={styles.tabStyle}>
//               <Image
//                   source={require('../assets/My_Order.png')}
//                   style={focused ? styles.imageStyle: styles.imageStyle1}
//                   resizeMode={"contain"}
//                 />
//               <PaddingBox style={2} />
//             <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor,fontSize:wp(2.7) }]}>My Order</Text>
//             </View>
//           ),
          
//         }}
//       />
//       <Tab.Screen
//         name="Subscription"
//         component={SubscriptionList}
//         options={{
//           tabBarVisible: false,
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({focused, size}) => (
//             <View style={styles.tabStyle}>
//               <Image
//                   source={require('../assets/Subscription.png')}
//                   style={focused ? styles.imageStyle: styles.imageStyle1}
//                   resizeMode={"contain"}
//                 />
//             <PaddingBox style={2} />
//           <Text style={[Styles.text10M, {color:focused ?  color.dSecond :color.navColor, fontSize:wp(2.7) }]}>Subscription</Text>
//           </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

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

function AuthenticationStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="OtpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
}

function EcommerceStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="WelcomeDoctor"
 
    >
      <Stack.Screen name="WelcomeDoctor" component={WelcomeDoctor} />
      <Stack.Screen name="DoctorDarshboard" component={DoctorDarshboard} />
      <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} />
      <Stack.Screen name="DoctorExperienceScreen" component={DoctorExperienceScreen} />
      {/* <Stack.Screen name="" component={} /> */}
      {/* <Stack.Screen name="" component={} /> */}
      {/* <Stack.Screen name="" component={} /> */}
    </Stack.Navigator>
  );
}

function DrawerMenu() {
  return (
      <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        lazy:false,
        drawerStyle: {
          width: "85%",
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      >
      <Drawer.Screen name="EcommerceStack" component={EcommerceStack} />
    </Drawer.Navigator>
  )
}

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
       {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu} /> */}
       {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu} /> */}
       {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu} /> */}
       {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
