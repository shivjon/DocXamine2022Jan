import React, {useState, useEffect} from 'react';
import {color} from '../component/theme';
import * as authAction from '../redux/actions/authAction';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const SplashScreen = props => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [valueScreen, setValueScreen] = useState('');
  useEffect(() => {
    setTimeout(function () {
        props.navigation.dispatch(
          StackActions.replace('LoginScreen')
      );
    }, 1000);
  }, []);
  

  return (
    <View>
      <StatusBar backgroundColor={color.primary} />
      {/* <Image
          source={require('../assets/logo.png')}
          style={styles.imageStyle}
          resizeMode="contain"
        /> */}
      <Text> Welcome DocXamine</Text>
      <View style={styles.versionView}>
        <Text style={styles.textStyle}>V.1.0.1</Text>
      </View>
    </View>
  );
};
{
  /* {"V." + getVersion()} */
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    // marginTop: 15,
    height: height / 2,
    width: width / 1.2,
  },
  imageView: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionView: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: color.secondary,
    fontSize: 13,
  },
});
