import React from 'react'
import { StyleSheet, Text, View,Image , Dimensions} from 'react-native'
import TopArrow from './TopArrow'
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');
const HeaderImage = (props) => {
    return (
        <LinearGradient
          colors={['#44B9EB', '#43D2F9']}
          style={{borderBottomLeftRadius: height * 0.1}}>
          <TopArrow navigation={props.navigation} />
          <View style={{paddingBottom: height * 0.04}}>
            <Image
              source={require('../assets/white.png')}
              style={{
                height: hp('20%'),
                width: hp('18'),
                alignSelf: 'center',
                marginTop: height * 0.05,
              }}
            />
          </View>
        </LinearGradient>
    )
}

export default HeaderImage

const styles = StyleSheet.create({})
