import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
interface PrimaryButtonProps{

    primarytext?:string
    primarystyle?:any
    textstyle?:any
    onPressLogin?:any
}

const PrimaryButton:React.FC<PrimaryButtonProps>=(props)=>{
    return(
        <>
        <TouchableOpacity style={props.primarystyle} onPress={props.onPressLogin}>
            <Text style={props.textstyle}>{props.primarytext}</Text>
        </TouchableOpacity>
        </>
    )
}
export default PrimaryButton