/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Header from './components/Header/header';
import Top from './components/Top/top';
import Middle from './components/Middle/middle';
import Footer from './components/Footer/footer';
import { COLORS } from './constants';


const App = () => {
  return (
    <View style={{backgroundColor:COLORS.lightBlue}}>
     <Header/>
     <Top/>
     <Middle/>
     <Footer/>
    </View>
  );
};

export default App;
