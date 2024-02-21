import React from 'react'
import {View,Text} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { String } from '../localization'
import { icons } from '../assets/appIcons'
const FollowerAlarm=({navigation}:any)=>{
    const onPressBack=()=>{
        navigation.goBack()
    }
    return(
        <HeaderComponent
        headertitle={String.followeralarmtitle}
        lefticonfirst={icons.back}
        lefticonfirstvisible={true}
        onpresslefticonfirst={onPressBack}
        />
    )
}
export default FollowerAlarm