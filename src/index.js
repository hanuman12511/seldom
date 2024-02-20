import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNav from './navigations'
import { NavigationContainer } from '@react-navigation/native'
const  App=()=>{
    useEffect(()=>{
        setTimeout(()=>{
            SplashScreen.hide();
        },1000)
    },[])
    return(
        <>
        <NavigationContainer>
        <StackNav/>
        </NavigationContainer>
        </>
    )
}
export default App