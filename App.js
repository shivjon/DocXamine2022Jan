import  React , {useState, useEffect} from 'react';
import {Alert, StyleSheet,} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';
// import SplashScreen from "./Screens/SplashScreen";
// import OfflineNotice from './component/OfflineNotice';
// import {decode, encode} from 'base-64'

const App = (props) => {

  return (
    <Provider store={store}>
      <AppNavigator/>
       {/* <OfflineNotice/>
      <PushController/> */}
    </Provider>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#fff'
    },
  
   
});

export default App;