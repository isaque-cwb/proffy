import { StatusBar } from 'expo-status-bar';
import Landing from './src/pages/Landing'
import  * as SplashScreen   from 'expo-splash-screen'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import {  Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { View } from 'react-native';


export default function App() {

 
  

  return (
    < >
      <Landing />
      <StatusBar style="light" />
    </>
  );


}

