import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SimpleHeader from '../../Comman/SimpleHeader';

const SettingScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <SimpleHeader name={"Settings"} />
        </SafeAreaView>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({});
