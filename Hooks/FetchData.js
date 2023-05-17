// /* eslint-disable prettier/prettier */
// import { useState } from 'react';
// import axios from 'axios';


// const KelvinToCel = (k) => {
//     return (k - 273.15).toFixed(2);
// }

// const FetchData = () => { 
//     const [text, onChangeText] = useState('');
//     const [data, setData] = useState('');
//     const API_KEY = '30a63e98205d057a90a80cf57295f5ac';
//     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`;
//     const getData = async () => {
//         try {
//             const response = await axios.get(URL);
//             console.log(response.data.main.temp);
//             var temp = response.data.main.temp;
//             setData(temp);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     return {getData, data, KelvinToCel, onChangeText, text};
// }

// export default FetchData;