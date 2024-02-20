import React,{useEffect} from "react";
import {View,Text} from 'react-native'
import { getData } from "../utils/LocalAsyncStorage";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator()
const StackNav=()=>{
    useEffect(()=>{
        console.log(getData);
        if(getData){
            console.log("user exits");
        }
        else{
            console.log("user not work");
        }
    },[])
    const NavigationScreen=()=>{
       
        if(getData){
            return <>
            <Stack.Navigator  screenOptions={{ headerShown: false}}>
            <Stack.Screen name="login" component={LoginScreen}  />
            </Stack.Navigator>
            </>
        }
        else{
            console.log("user not work");
        }
    }
return(
        <>
        {NavigationScreen()}
        </>
    )
}
export default StackNav;