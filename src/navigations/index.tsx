import React,{useEffect} from "react";
import {View,Text} from 'react-native'
import { getData } from "../utils/LocalAsyncStorage";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LeaderBoard from "../screens/LeaderBoard";
import Notification from "../screens/Notification";
import AnalysisScreen from "../screens/AnalysisScreen";
import FollowerAlarm from "../screens/FollowerAlarm";
import {navigaionstring} from './navigationString'
const Stack = createStackNavigator()
const StackNav=(navigation:any)=>{
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
            <Stack.Screen name={navigaionstring.leaderboard} component={LeaderBoard}  />
            <Stack.Screen name={navigaionstring.login} component={LoginScreen}  />
            <Stack.Screen name={navigaionstring.signup} component={RegisterScreen}  />
            <Stack.Screen name={navigaionstring.notification} component={Notification}  />
            <Stack.Screen name={navigaionstring.analysis} component={AnalysisScreen}  />
            <Stack.Screen name={navigaionstring.followeralarm} component={FollowerAlarm}  />
           
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