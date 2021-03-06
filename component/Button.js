import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Styles } from './Styles';
import { color } from './theme';

export default class Button extends Component {

    constructor(props){
        super(props);
        console.log('====================================');
        console.log(props);
        console.log('====================================');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}  style={[this.props.cricle ?styles.buttonCricle : styles.button,this.props.style ]}  >
                <Text style={[styles.buttonText,Styles.text18SB]}>{this.props.name}</Text>
            </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:"100%", 
        paddingVertical:15,
        backgroundColor:color.primary,
        borderRadius: 15,
        // elevation:1
    },
    buttonCricle:{
        width:"100%", 
        paddingVertical:15,
        backgroundColor:color.primary,
        borderRadius: 50,
    },
    buttonText:{
        alignSelf:"center",
        color:color.white
    },
})
