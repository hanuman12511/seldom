import React, { useEffect } from 'react'
import {View,Text} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { String } from '../localization'
import { icons } from '../assets/appIcons'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../data/store/user/userAction'
const Notification=({navigation}:any)=>{
    const dispatch:any = useDispatch()
    const data = useSelector(state=>state?.user)
    const{error,loading,userdata}=data
    console.log("notifu=ivarupb");
    
    console.log(userdata);
    useEffect(()=>{
        dispatch(userAction())
    },[])
    
    
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