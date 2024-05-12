
import React, { useEffect } from 'react'
import {View,Text,Image,StyleSheet, Alert} from 'react-native'
import { icons } from '../assets/appIcons'
import HeaderComponent from '../components/HeaderComponent'
import { String } from '../localization'

import { useDispatch,useSelector } from 'react-redux'
import { homeAction } from '../data/store/Home/homeAction'
const LeaderBoard=({navigation}:any)=>{

const data = useSelector(state=>state?.home)
console.log("***************",data);

const{error,loading,userdata}=data
console.log(userdata);

const dispatch :any= useDispatch()
    useEffect(()=>{
        dispatch(homeAction())
},[])

    const onPressDrawer=()=>{
        navigation.openDrawer();
        }
        const onPressAnalys=()=>{
            Alert.alert("Analys")
            navigation.navigate('analysis')
  
        }
        const onPressAlarm=()=>{
                Alert.alert("Alarm")
                navigation.navigate('followeralarm')
        }
        const onPressNotification=()=>{
            Alert.alert("Notification")
            navigation.navigate('notification')
        }
return(
    <>
   <HeaderComponent
   headertitle={String.leaderboardtitle}
   lefticonfirst={icons.menu}
   lefticonfirstvisible={true}
   righticonfirst={icons.notification}
   righticonfirstvisible={true}
   righticonsec={icons.alarm}
   righticonsecvisible={true}
   righticonthird={icons.analys}
   righticonthirdvisible={true}
   onpresslefticonfirst={onPressDrawer}
   onpressrighticonfirst={onPressNotification}
   onpressrighticonthird={onPressAnalys}
   onpressrighticonsec={onPressAlarm}

   />
   </>
)
}
export default LeaderBoard
const styles = StyleSheet.create({

logo:{
    width:20,
    height:20,
    margin:5
},
headerbarview:{
    flexDirection:'row',
    backgroundColor:'blue',
    padding:10,
    justifyContent:'space-between'
},
headerbarviewleft:{
    flexDirection:'row',
    backgroundColor:'red',
    alignItems:'center'
},
headerbarviewright:{
    flexDirection:'row',
    
    backgroundColor:'yellow',
},
title:{
    marginLeft:10,
    marginRight:10,
    fontSize:20
}

})