import { StatusBar } from 'expo-status-bar';
import Landing from './src/pages/Landing'
import  * as SplashScreen   from 'expo-splash-screen'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import {  Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Archivo_400Regular,
          Archivo_700Bold,
          Poppins_400Regular,
          Poppins_600SemiBold
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View  onLayout={onLayoutRootView} style={{flex:1}}>
      <Landing />
      <StatusBar style="light" />
    </View>
  );

  

  }
