import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { color } from './theme';
import LinearGradient from 'react-native-linear-gradient';
import { VerticalBox } from './AlignBox';

export default class ButtonIcon extends Component {

    constructor(props){
        super(props);
        console.log('====================================');
        console.log(props);
        console.log('====================================');
    }

    render() {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#37d5d6', '#4786fc']}  style={[ styles.button,this.props.style ]} >
                <TouchableOpacity onPress={this.props.onPress} >
                    
                <Text style={[styles.buttonText]}>{this.props.name}</Text>
              
            </TouchableOpacity>
            <VerticalBox style={8} />
            {this.props.children}
            </LinearGradient>
            
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:"100%", 
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:color.primary,
        borderRadius: 50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        // elevation:1
    },
    buttonText:{
        fontFamily:"Muli-Bold",
        fontSize:20,
        marginBottom:5,
        alignSelf:"center",
        color:color.white
    },
})
