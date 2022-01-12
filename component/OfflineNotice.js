import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions,Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
const { height, width } = Dimensions.get('window');
import NetInfo from "@react-native-community/netinfo";
import { useSelector, useDispatch } from 'react-redux';
import * as authAction from '.././redux/actions/authAction';
import Button from './Button';
import { Styles } from './Styles';
import { VerticalBox } from './AlignBox';

const OfflineNotice = () => {
    
    const dispatch = useDispatch();
    const status = useSelector(state=> state.auth.status);
    // const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        
        NetInfo.addEventListener(handleConnectivityChange);
        NetInfo.fetch().then(state => {
            console.log("net info fetched")
            // setIsConnected(state.isConnected)
            dispatch(authAction.offlineStatus(state.isConnected))
            console.log("state changed 1", status)
        });

        return () => {
            NetInfo.addEventListener(state => {
                // setIsConnected(state.isConnected)
                dispatch(authAction.offlineStatus(state.isConnected))
                console.log("state changed 2", status)
            });
        }
    }, [NetInfo])


    function handleConnectivityChange(status) {
        if ( status.isConnected
            // state.isConnected
            ) {
                dispatch(authAction.offlineStatus(true))
                console.log("state changed 3", status.isConnected)
            // setIsConnected(true)
        } else {
            dispatch(authAction.offlineStatus(false))
                console.log("state changed 4", status.isConnected)
            // setIsConnected(false)
        }
    }
    function MiniOfflineSign() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={!status}
                onRequestClose={() => { console.log('close modal') }}>
                <View
                    style={styles.modalBackground}
                >
                    <View
                        style={styles.signOffWrapper}
                    >
                        <View style={styles.viewDesign}>
                             <Image
                         source={require('../assets/wifi.png')}
                         style={{width:40, height:40, }}
                            />
                            <VerticalBox style={5} />
                            <Text style={[Styles.text15R,{width:'80%'}]}>
                            Please check your internet connection and try again.
                            </Text>
                        </View>
                       <VerticalBox style={5} />
                       <View style={{width:"25%"}}>
                        <Button name={"Retry"} cricle={50} />
                       </View>
                    </View>
                </View>
            </Modal>
        );
    }

    if (!status) {
        return (
            <MiniOfflineSign />
        )
    }
    return null;
}

const styles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        flexDirection: 'column',
        elevation: 2,
        // height:'100%',
        // justifyContent: 'space-around',
        backgroundColor: '#303E44'
    },
    viewDesign:{
        flexDirection:"row",
        width:'75%'
    },
    signOffWrapper: {

        backgroundColor: '#FFFFFF',
        width: '100%',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        display: 'flex',
        alignItems: 'center',
        flexDirection:"row",
        justifyContent: 'space-around'
    },
    heading: {
        // fontFamily: 'AvenirNext-DemiBold',
        color: '#303E44',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0,
        //   lineHeight: 22
    },
    confirmText: {
        // fontFamily: 'AvenirNext-Medium',
        color: '#303E44',
        fontSize:16,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 23,
        textAlign: 'center'
    },
});
export default OfflineNotice;