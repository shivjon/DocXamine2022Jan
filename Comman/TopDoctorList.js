import React from 'react'
import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { PaddingBox, VerticalBox } from '../component/AlignBox'
import { Styles } from '../component/Styles'
import { color } from '../component/theme'

const TopDoctorList = (props) => {

    const renderItem = ({item, index}) =>(
        <TouchableOpacity style={styles.listContainer}  onPress={()=>props.navigation.navigate("AboutDoctorScreen")}>
            <View style={styles.imageStyle}>
                <Image
                    source={require('../assets/icon/profile.png')}
                    style={{width:'100%', height:'100%'}}
                />
            </View>
          <VerticalBox style={10} />
          <View style={styles.textStyles}>
              <View style={[Styles.alignbetween, {width:"80%",}]}>
              <Text style={[Styles.text16LB,{color:color.black}]}>
                  Dr. Stella Rani
              </Text>
            
              </View>
              
              <Text style={Styles.text14SB}>
                  Cardiologist, Apollo - Banglore
              </Text>
          </View>
          <Text style={[Styles.text12R,{color:color.secondary, position:"absolute",top:5, right:10}]}>
                  Book Appoinment
              </Text>
        </TouchableOpacity>
    )
    return (
            <FlatList 
                data={[{name:""}, {name:""}, {name:""}, {name:""},{name:""}, {name:""}, {name:""}, {name:""}]}
                renderItem={renderItem}
                ItemSeparatorComponent={()=>(
                    <PaddingBox style={10} />
                )}
            />
    )
}

export default TopDoctorList

const styles = StyleSheet.create({
    listContainer:{
        width:"100%",
        borderWidth:1,
        borderColor:color.secondary,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        flexDirection:"row"
    },
    textStyles:{
        justifyContent:"space-between",
    },
    imageStyle:{
        width:50,
        height:50,
    },
})
