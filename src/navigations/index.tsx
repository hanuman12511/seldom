import React,{useEffect, useState} from "react";
import {View,Text, ActivityIndicator} from 'react-native'
import { getData, removeData, storeData } from "../utils/LocalAsyncStorage";
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
import ScreenLoading from "../utils/ScreenLoading";
import { useFocusEffect } from "@react-navigation/native";
import { AuthContext } from "../utils/authContext";
const Stack = createStackNavigator()
const drawer = createDrawerNavigator()


const StackNav=(navigation:any)=>{
    const [user,setUser] =useState(null)
    const [isLoader,setLoader] =useState(false)
    async function showuser(){
        let userdata= await getData("user5");
             setUser(userdata)
             setLoader(false)
        }
   const [state, dispatch] = React.useReducer(
        (prevState:any, action:any) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
      );
    
      React.useEffect(() => {
        const bootstrapAsync = async () => {
          let userToken;
          try {
            userToken = await getData("userauth");
          } catch (e) {
           
          }
                dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
    
        bootstrapAsync();
      }, []);
    
      const authContext = React.useMemo(
        () => ({
          signIn: async (data) => {
                dispatch({ type: 'SIGN_IN', token: await storeData("userauth",data) });
            },
          signOut: async() => dispatch({ type: 'SIGN_OUT',token:await removeData("userauth") }),
          signUp: async (data) => {
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );


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
      console.log("navigation navigation component",state.userToken);
    // showuser()
        if(state.userToken !=null){
            return <>           
            <Stack.Navigator  screenOptions={{ headerShown: false}}>
                <Stack.Screen name={navigaionstring.drawer} component={Drawer}  />
                <Stack.Screen name={navigaionstring.notification} component={Notification}  />
                <Stack.Screen name={navigaionstring.analysis} component={AnalysisScreen}  />
                <Stack.Screen name={navigaionstring.followeralarm} component={FollowerAlarm}  />
           </Stack.Navigator>
            </>
        }
        else{
          return <>
            <Stack.Navigator  screenOptions={{ headerShown: false}}>
                <Stack.Screen name={navigaionstring.login} component={LoginScreen}  />
                <Stack.Screen name={navigaionstring.signup} component={RegisterScreen}  />
            </Stack.Navigator>
           </>
        }
    }
return(
        <>  
        <AuthContext.Provider value={authContext}>
         <Stack.Navigator  screenOptions={{ headerShown: false}}>
            <Stack.Screen name={navigaionstring.dashboard} component={NavigationScreen}  />
          </Stack.Navigator>
      
          {
            state.isLoading?
            <ScreenLoading/>
           :null
        }
    </AuthContext.Provider>
   
        </>
    )
}
export default StackNav;