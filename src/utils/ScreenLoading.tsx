import React from 'react'
import {View,ActivityIndicator} from 'react-native'
interface ScreenLoadingProps{
    isLoding:any
}
const ScreenLoading:React.FC<ScreenLoadingProps>=(props)=>
{
    return(<>
    {props.isLoding?
       <View style={{ backgroundColor:'#fff', position:'absolute' , top:0,left:0,right:0,bottom:0, flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{ borderRadius:10, backgroundColor:'red',width:200,height:200,alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator/>
        </View>
    </View> 
    :null
        }
    </>
    )
}

export default ScreenLoading