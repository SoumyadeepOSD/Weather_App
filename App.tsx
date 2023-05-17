/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text,TextInput} from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const KelvinToCel = (k) => {
  return (k - 273.15).toFixed(2);
}

const App = () => {
  const [text, onChangeText] = useState('');
  const [data, setData] = useState('');
  const API_KEY = '30a63e98205d057a90a80cf57295f5ac';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`;

  const getUser = async() => {
    try {
      const response = await axios.get(URL);
      console.log(response.data.main.temp);
      var temp = response.data.main.temp;
      setData(temp);
    } catch (error) {
      console.error(error);
    }
  }
  return(
  <View>
     <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
        keyboardType="default"
        onSubmitEditing={getUser}
      />
    <Text>{text}</Text>
    {
      Number(data) > 0?<Text>{KelvinToCel(data)}</Text>:null
    }
  </View>);
}

export default App;