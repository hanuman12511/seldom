import React from 'react'
import {View,Text} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { String } from '../localization'
import { icons } from '../assets/appIcons'
const Notification=({navigation}:any)=>{
    const onPressBack=()=>{
        navigation.goBack()
    }
    return(
       <HeaderComponent
       headertitle={String.navigationtitle}
       lefticonfirst={icons.back}
       lefticonfirstvisible={true}
       onpresslefticonfirst={onPressBack}
       />
    )
}
export default Notification