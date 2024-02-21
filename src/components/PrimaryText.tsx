import React from 'react'
import { Text } from "react-native"

interface PrimaryTextProps{
    text?:string
    style?:any
}

const PrimaryText:React.FC<PrimaryTextProps>=(props)=>{

    return(
        <Text style={props.style}>{props.text}</Text>
    )
}

export default PrimaryText