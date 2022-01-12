import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Styles } from './Styles'
import { color } from './theme'


export class TextInputBox extends Component {
     constructor(props){
        super(props)
     }

    render() {
        return (
          <View style={[styles.inputContainer,this.props.style]}>
            <View style={[Styles.alignbetween, {flex: 1}]}>
                 {this.props.children}
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    inputContainer: {
        // borderRadius: 15,
        borderBottomWidth: 1.5,
        height: 45,
        borderColor: color.primary,
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        backgroundColor: color.white,
        paddingRight: 10,
      },
})

