import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from '../component/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../component/theme';
import { VerticalBox } from '../component/AlignBox';

const Header = props => {
  return (
    <View style={styles.container}>
      {props.backButton || props.backButton == undefined  &&
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.arrow}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      }
      <Text style={[Styles.text18M,styles.titleView]}>{props.name}</Text>
      <View style={[Styles.row,{position:"absolute", right:10}]}>
        <VerticalBox style={5} />
        {props.shopButton || props.backButton == undefined  &&
        <TouchableOpacity >
        <Image
          source={require('../assets/shop.png')}
          style={{width: 20, height: 20, tintColor:color.black}}
          resizeMode="contain"
        />
        </TouchableOpacity>
        }
        <VerticalBox style={5} />
        {props.notificationButton || props.backButton == undefined  &&
        <TouchableOpacity>
        <Image
          source={require('../assets/notification.png')}
          style={{width: 20, height: 20, tintColor:color.black}}
          resizeMode="contain"
        />
        </TouchableOpacity>
        }
        <VerticalBox style={5} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor:color.white
  },
  arrow: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    position:"absolute", 
    left:10
  },
  titleView:{
    position:"absolute",
    alignSelf:"center", 
  },
});
