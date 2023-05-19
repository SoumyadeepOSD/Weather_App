/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const SIZE = StyleSheet.create({
    small: 12,
    medium: 20,
    large: 30,
    xLarge: 40,
    xxLarge: 50,
});

const STYLE = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:30,
        marginHorizontal:10,
        marginVertical:10,
        paddingHorizontal:20,
        fontSize:20,
    },
    LogoContainer:{
        height:150,
        width:150,
        alignSelf:'center'
    },
    ParameterValue:{
        color: 'white',
        fontSize: SIZE.medium,
        textAlign: 'center',
        marginTop: 10,
    },
});

export {STYLE, SIZE};