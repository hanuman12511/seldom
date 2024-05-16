import { useFocusEffect } from "@react-navigation/native"
import React, { useCallback, useEffect, useState }  from "react"
import {View,Text} from 'react-native'
interface NotificationErrorProps{
    text:any,
    isShowMessage:any
} 
const NotificationError:React.FC<NotificationErrorProps>=(props)=>{
 
    
    const[isShow,setShow] = useState(false)
 
    useFocusEffect(
        React.useCallback(() => {
            setShow(props.isShowMessage)
    
            setTimeout(()=>{
                setShow(!isShow)
        },3000)
        },[isShow])
        
    )
console.log("network",isShow);

return(
<>
{isShow?<>
<View style={{position:"absolute",left:0,right:0,bottom:20,backgroundColor:"red",marginHorizontal:20,borderRadius:10}}>
<Text style={{padding:10,color:'#fff',textAlign:'center'}}>{props.text}</Text>
</View>
</>:null
}
</>
)
}

export default NotificationError