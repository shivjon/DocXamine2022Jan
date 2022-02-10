import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SimpleHeader from '../../Comman/SimpleHeader';

const SlotScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <SimpleHeader name={"Slot"} />
    </SafeAreaView>
  );
};

export default SlotScreen;

const styles = StyleSheet.create({});
