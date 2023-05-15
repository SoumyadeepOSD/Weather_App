/* eslint-disable prettier/prettier */

import React, {useState} from 'react'
import {View, Text, Image} from 'react-native';
import { COLORS, SIZES, STYLES, icon } from '../../constants';
import useFetch from '../../Data/FetchData';

const weathers = ['sunny', 'rainy', 'sunrainy', 'thunder'];


const Top = () => {
  const [weather, setWeather] = useState(weathers[4]); 
  const {data, KelvinToCel} = useFetch();
  // console.log((data[0]).feels_like);
  return (
    <View style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'5%', backgroundColor:COLORS.lightBlue}}>
        <Image 
        source={weather==='sunny'?icon.Sun:
        weather==='rainy'?icon.Rain:
        weather==='sunrainy'?icon.SunnyRain:
        icon.Storm} style={STYLES.LargeIconStyle}/>

        <Text style={{fontSize:SIZES.gaint, color:COLORS.lightWhite}}>{KelvinToCel(data[0].temp)}°</Text>
        <Text style={{fontSize:SIZES.small, color:COLORS.lightWhite}}>{data[1].description}</Text>
        
        <View style={STYLES.MinMaxTempStyle}>
          <Text style={{fontSize:SIZES.small, color:COLORS.lightWhite}}>Max: {KelvinToCel(data[0].temp_max)}°</Text>
          <Text style={{fontSize:SIZES.small, color:COLORS.lightWhite}}>Min: {KelvinToCel(data[0].temp_min)}°</Text>
        </View>
       <Text>{data[0].humidity}</Text>
    </View>
  );
};

export default Top;