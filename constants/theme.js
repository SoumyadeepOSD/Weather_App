/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const COLORS = {
    primary: '#312651',
    secondary: '#444262',
    tertiary: '#FF7754',

    gray: '#83829A',
    gray2: '#C1C0C8',

    white: '#F3F4F8',
    lightWhite: '#FAFAFC',

    lightBlue: '#0062FF',
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
    gaint: 50,
};

const STYLES = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20,
        backgroundColor:COLORS.lightBlue,
    },
    MinMaxTempStyle:{
        display:'flex', flexDirection:'row',
        width:'25%',
        justifyContent:'space-between',
    },
    NormalIconStyle:{
        resizeMode:'contain',
        height:20,
        width:20,
        tintColor:COLORS.lightWhite,
    },
    MiniIconStyle:{
        resizeMode:'contain',
        height:10,
        width:10,
        tintColor:COLORS.lightWhite,
    },
    LargeIconStyle:{
        height:150,
        width:150,
        resizeMode:'contain',
    },
});


export {COLORS, SIZES, STYLES};
