import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SimpleHeader from '../../Comman/SimpleHeader';
import AsyncStorage from "@react-native-async-storage/async-storage";

const DashboardDoctor = (props) => {

  useEffect(() => {
    // props.navigation.navigate("HomeStack");
    // AsyncStorage.setItem(
    //   'profile', "true"
    // );
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader name={"Dashboard"} />
      <Text>
        Welcome Back
      </Text>
    </SafeAreaView>
  );
};

export default DashboardDoctor;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
