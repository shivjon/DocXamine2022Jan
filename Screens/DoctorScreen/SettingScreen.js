import {  StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SimpleHeader from '../../Comman/SimpleHeader';
import { Box, PaddingBox } from '../../component/AlignBox';

const SettingScreen = (props) => {
    return (
        <View style={styles.container}>
            <SimpleHeader name={"Settings"} />
            <PaddingBox style={20} />
            <Box>
                <Text>
                    work under progress.....
                </Text>
            </Box>
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({});
