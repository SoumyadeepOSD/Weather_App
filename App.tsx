/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { AppRegistry } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import {View, Text,TextInput,Image} from 'react-native';
import {STYLE, SIZE} from './Styles';
import {name as appName} from './app.json';
import {Cloudy,Sun,SunnyRain,Haze,Location,Humidity,Pressure,Temp,Direction,Weather,Windy} from './Icons';
const KelvinToCel = k => (k - 273.15).toFixed(2);



AppRegistry.registerComponent(appName,()=>App);
const App = () => {
  const [city, onChangeCity] = useState('');
    const [data, setData] = useState({
        main: '',
        clouds: '',
        weather: '',
        wind: '',
        sys: '',
    });
    const GetData = async() => {  
    const API_KEY = '30a63e98205d057a90a80cf57295f5ac';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
      const response = await axios.get(URL);
      const clouds = response.data.clouds.all;
      const main = response.data.main;
      const weather = response.data.weather[0].description;
      const winds = response.data.wind;
      const sys = response.data.sys;
      console.log(clouds.all);
      setData({...data, main: main, clouds: clouds, weather: weather, wind: winds, sys: sys});
    } catch (error) {
      console.error(error);
    }
  };
  return(
  <View style={{backgroundColor:'#33485C'}}>
     <TextInput
        style={STYLE.container}
        onChangeText={onChangeCity}
        value={city}
        placeholder="Enter the City"
        keyboardType="default"
        onSubmitEditing={GetData}
      />
      {data.main.temp
      ?(
        <View>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
        <Image source={Location} style={{height:30, width:30, resizeMode:'contain',tintColor:'white'}}/>
        <Text style={{color:'white', fontSize:SIZE.large, textAlign:'center', marginTop:10}}>{city}</Text>
        <Text style={{color:'white', fontSize:SIZE.large, textAlign:'center', marginTop:10}}> {data.sys.country}</Text>
      </View>
    <Image
    style={STYLE.LogoContainer}
    source={data.weather==='clear sky'
    ? Sun
    : data.weather==='overcast clouds'
    ? Cloudy 
    : data.weather==='haze'
    ? Haze
    : SunnyRain}/>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
       <Image source={Temp} style={{height:30, width:30}}/>
       <Text style={{color:'white', fontSize:SIZE.xLarge, textAlign:'center',}}>
        {KelvinToCel(data.main.temp)}°C, {data.weather}
       </Text>
      </View>

       <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <Image source={Humidity} style={{height:20, width:20}}/>
            <Text style={{color:'white', fontSize:SIZE.medium, textAlign:'center', marginTop:10,}}>
              {data.main.humidity}%
            </Text>
            </View>
      
       
            <View style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <Image source={Pressure} style={{height:20, width:20}}/>
            <Text style={{color:'white', fontSize:SIZE.medium, textAlign:'center', marginTop:10,}}>
              {data.main.pressure}hpa
            </Text>
            </View>

            <View style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <Image source={Cloudy} style={{height:20, width:20}}/>
            <Text style={{color:'white', fontSize:SIZE.medium, textAlign:'center', marginTop:10,}}>
              {data.clouds}%
            </Text>
            </View>

            

       </View>
       

       <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
       <View style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
          <Image source={Windy} style={{height:40, width:40}}/>
          <Text style={{color:'white', fontSize:SIZE.medium, textAlign:'center', marginTop:10,}}>
            {data.wind.speed}m/s
          </Text>
       </View>

       <View style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
          <Image source={Direction} style={{height:30, width:30, resizeMode:'contain', tintColor:'white'}}/>
          <Text style={{color:'white', fontSize:SIZE.medium, textAlign:'center', marginTop:10,}}>
            {data.wind.deg}°
          </Text>
       </View>
       </View>
       </View>

      )
      : (
        <View style={{backgroundColor:'#E6DBF4'}}>
          <View style={{alignItems:'center', backgroundColor:'#C2A7E5', width:'70%', alignSelf:'center', marginVertical:10, borderRadius:20, paddingVertical:20}}>
          <Text style={{textAlign:'center', fontSize:20, color:'white', height:100, borderRadius:20,}}>Let's check your weather</Text>
          <Image source={Weather} style={{height:150, width:150}}/>
          </View>
        </View>
      )}


      
    
    </View>); 
}

export default App;




