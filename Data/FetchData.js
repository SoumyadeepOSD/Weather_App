/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import axios from 'axios';

const key = '1e162f774b111f7b0d14f95f80b9c9f2';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=${key}`;

const KelvinToCel = (k) =>parseFloat((k - 273)).toFixed(2);

const useFetch = () => {
    const init = [];
    const [data, setData] = useState(init);
    const fetchData = () => {
        // try {
        //   let response = await fetch(URL);
        //   let json = await response.json();
        //   setData([json.main, json.coord, json.weather]);
        // } catch (error) {
        //    console.error(error);
        // }
        axios.get(URL)
        .then(res=>{
            console.log(res.data.main);
            setData([res.data.main, res.data.weather[0]]);
        }).catch(err=>{
            console.log(err);
        });
    };

    useEffect(()=>{
       fetchData();
    });

    return {data,KelvinToCel};
};




export default useFetch;
