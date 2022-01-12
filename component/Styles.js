import { StyleSheet } from "react-native";
import { color } from "./theme";

export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:color.white
    },
    containerBorder:{
        borderColor: color.otpColor,
        backgroundColor: color.white,
        borderWidth: 1,
        width: '100%',
        fontFamily: 'Muli-Light',
        borderRadius: 15,
        justifyContent: 'space-between',
        flexDirection:"row"
    },
    cricleGreen:{
        borderRadius:50,
        width:15,
        height:15,
        backgroundColor:color.green,
        elevation:2,
        position:"absolute",
        left:5,top:5,
    },
    inputBox:{
        width:"100%",
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:30,
        borderWidth:1,
        borderColor:color.secondary,
    },
    cricleRed:{
        borderRadius:50,
        width:15,
        height:15,
        backgroundColor:color.red,
        elevation:2,
        position:"absolute",
        left:5,top:5,
    },
    cricleBlue:{
        borderRadius:50,
        width:15,
        height:15,
        backgroundColor:"#00FFFF",
        elevation:2,
        position:"absolute",
        left:5,top:5,
    },
    center :{
        alignSelf:"center"
    },
    alignVCenter:{
        alignItems:"center"
    },
    inputStyle:{
        backgroundColor:color.white,
        height:45,
    },
    inputHalfStyle:{
        backgroundColor:color.white,
        height:45,
        width:'49%'
    },
    start1:{
        flexDirection:"row",
        // backgroundColor:color.green,
        paddingVertical:2,
        borderRadius:30,
        
    },
    footerView:{
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%',
        paddingHorizontal: 20,
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: color.white,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    start:{
        flexDirection:"row",
        paddingHorizontal:5,
        backgroundColor:color.green,
        paddingVertical:1,
        borderRadius:30,
    },
    lineVertical:{
        backgroundColor:color.white,
        width:2,
        height:'80%'
    },
    containerWithBG:{
        flex: 1,
        backgroundColor:color.secondary
    },
    containerT:{
        flex: 1,
    },
    verticalLine:{
        width:2,
        backgroundColor:"#F5F5F5",
        height:'100%'
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
    },
    rowAlign:{
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"space-between",
    },
    rowBet:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    arrowStyle:{
        marginHorizontal:10,
        marginTop:10,
        height:40,
        width:40,
        borderRadius:10,
    },
    centerItems:{
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    text12L:{
        fontFamily:"Muli-Light", 
        fontSize:12,
    },
    text12M:{
        fontFamily:"Muli-Medium", 
        fontSize:12,
    },
    text12RCGM:{
        fontFamily:"Muli-Regular", 
        fontSize:12,
        color:color.greyMedium,
    },
    text12R:{
        fontFamily:"Muli-Regular", 
        fontSize:12,
    },
    text9R:{
        fontFamily:"Muli-Regular", 
        fontSize:9,
    },
    text18SN:{
        fontFamily:"Muli-SemiBold",
        fontSize:18,
    },
    text14L:{
        fontFamily:"Muli-Light", 
        fontSize:14,
    },
    text14LR:{
        fontFamily:"Muli-Light", 
        fontSize:14,
        color:color.red,
        paddingHorizontal:5,
        paddingTop:2
    },
    text14SB:{
        fontFamily:"Muli-SemiBold", 
        fontSize:14,
    },
    text14B:{
        fontFamily:"Muli-Bold", 
        fontSize:14,
    },
    text14R:{
        fontFamily:"Muli-Regular", 
        fontSize:14,
        color:color.black
    },
    text14M:{
        fontFamily:"Muli-Medium", 
        fontSize:14,
    },
    text16B:{
        fontFamily:"Muli-SemiBold", 
        fontSize:16,
    },
    text16LB:{
        fontFamily:"Muli-Bold", 
        fontSize:16,
    },
    text16R:{
        fontFamily:"Muli-Regular", 
        fontSize:16,
    },
    text16M:{
        fontFamily:"Muli-Medium", 
        fontSize:16,
    },
    text18R:{
        fontFamily:"Muli-Regular", 
        fontSize:18,
    },
    text18SB:{
        fontFamily:"Muli-SemiBold",  
        fontSize:18,
    },
    text18M:{
        fontFamily:"Muli-Medium",  
        fontSize:18,
    },
    text15L:{
        fontFamily:"Muli-Light", 
        fontSize:15,
    },
    text10L:{
        fontFamily:"Muli-Light", 
        fontSize:10,
    },
    text10M:{
        fontFamily:"Muli-Medium", 
        fontSize:10,
    },
    text15R:{
        fontFamily:"Muli-Regular", 
        fontSize:15,
    },
    text15B:{
        fontFamily:"Muli-SemiBold", 
        fontSize:15,
    },
    text15RCB:{
        fontFamily:"Muli-Regular", 
        fontSize:18,
        color:color.greyMedium,
    },
    text15RCR:{
        fontFamily:"Muli-Regular", 
        fontSize:18,
        color:color.white
    },
    text15M:{
        fontFamily:"Muli-Medium", 
        fontSize:15,
    },
    text20M:{
        fontFamily:"Muli-Medium", 
        fontSize:20,
    },
    text20SM:{
        fontFamily:"Muli-SemiBold", 
        fontSize:20,
    },
    text20R:{
        fontFamily:"Muli-Regular", 
        fontSize:20,
    },
    text10R:{
        fontFamily:"Muli-Regular", 
        fontSize:10,
    },
    text22SB:{
        fontFamily:"Muli-SemiBold",
        fontSize:22,
        color:color.black
    },
    text22B:{
        fontFamily:"Muli-Bold",
        fontSize:22,
        color:color.black
    },
    alignbetween:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    alignEvenly:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    textError:{
        fontFamily:"Muli-Regular", 
        fontSize:10,
        color:color.red,
        paddingVertical:5,
        paddingHorizontal:5,
    },
    salfAlig:{
        // alignSelf:"center",
    },
    white:{color: color.white},
    black:{color: color.black},
})