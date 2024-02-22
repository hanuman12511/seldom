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
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomSidebar from "../components/CustomSidebar";
import { moderateScale } from "../utils/ScalingUtils";
import ManageWorkspace from "../screens/ManageWorkspace";
import SearchLeads from "../screens/SearchLeads";
const Stack = createStackNavigator()
const drawer = createDrawerNavigator()
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

const Drawer=()=>{
    return(
    <drawer.Navigator 
        screenOptions={{
             headerShown: false, 
             drawerStyle: {
                width:moderateScale(320) ,
              },
        }}
        drawerContent={(props) => <CustomSidebar {...props} />}
        >
        <drawer.Screen name={navigaionstring.leaderboard} component={LeaderBoard}/>
        <drawer.Screen name={navigaionstring.manager} component={ManageWorkspace}/>
        <drawer.Screen name={navigaionstring.searchleads} component={SearchLeads}/>
    </drawer.Navigator>
    )
}

    const NavigationScreen=()=>{
       
        if(getData){
            return <>
            <Stack.Navigator  screenOptions={{ headerShown: false}}>
            <Stack.Screen name={"drawer1"} component={Drawer}  />
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