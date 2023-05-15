/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import { STYLES, icon, SIZES, COLORS } from '../../constants';


const Header = () => {
  return (
    <View style={STYLES.container}>
        <LeftComponent/>
        <RightComponent/>
    </View>
  );
};

const LeftComponent = () => {
    return(
        <View style={{
            display:"flex",
            flexDirection:"row", 
            alignItems:"center", 
            width:'30%', 
            justifyContent:'space-between'}}>
        <Image source={icon.Location} style={STYLES.NormalIconStyle}/>
        <Text style={{fontSize:SIZES.medium, color:COLORS.lightWhite}}>Kolkata</Text>
        <Image source={icon.Dropdown} style={STYLES.MiniIconStyle}/>
        </View>
    );
}

const RightComponent = () => {
    return(
        <View style={{position:"relative"}}>
             <Image style={STYLES.NormalIconStyle} source={icon.Notification}/>
             <View style={{backgroundColor:'red', height:10, width:10, borderRadius:50, position:'absolute', right:0, top:2}}></View>
        </View>
    );
}

export default Header;