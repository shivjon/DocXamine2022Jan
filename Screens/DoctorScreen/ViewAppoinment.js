import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import SimpleHeader from '../../Comman/SimpleHeader';
import { Box, PaddingBox } from '../../component/AlignBox';
import { Styles } from '../../component/Styles';

const ViewAppoinment = (props) => {
    return (
        <View style={Styles.container}>
            <SimpleHeader name={"Appointments"} />
            <PaddingBox style={20} />
            <Box>
                <Text>
                    work under progress.....
                </Text>
            </Box>
        </View>
    )
}

export default ViewAppoinment

const styles = StyleSheet.create({})