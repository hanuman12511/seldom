
import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import { icons } from '../assets/appIcons'
import PrimaryImage from './PrimaryImage'
import PrimaryImageAction from './PrimaryImageAction'
interface HeaderComponentProps{
    headertitle?:string
    lefticonfirst?:any
    lefticonfirstvisible?:boolean
    righticonfirst?:any
    righticonfirstvisible?:boolean
    righticonsec?:any
    righticonsecvisible?:boolean
    righticonthird?:any
    righticonthirdvisible?:boolean
    onpressrighticonfirst?:any
    onpressrighticonthird?:any
    onpressrighticonsec?:any
    onpresslefticonfirst?:any
    

}

const HeaderComponent:React.FC<HeaderComponentProps>=(props)=>{
return(
    <View style={styles.headerbarview}>
        <View style={styles.headerbarviewleft}>
           {props.lefticonfirstvisible?
            <PrimaryImageAction 
                 primaryimagestyle={styles.logo} 
                 primaryimagesource={props.lefticonfirst}
                 onPress={props.onpresslefticonfirst}
                 />:null
           }
            <Text style={styles.title}>
                {props.headertitle}
            </Text>
    </View>
        <View style={styles.headerbarviewright}>
        {props. righticonthirdvisible?
            <PrimaryImageAction 
                 primaryimagestyle={styles.logo} 
                 primaryimagesource={props.righticonthird}
                 onPress={props.onpressrighticonthird}
                 />:null
           }
         {props. righticonsecvisible?
            <PrimaryImageAction 
                 primaryimagestyle={styles.logo} 
                 primaryimagesource={props.righticonsec}
                 onPress={props. onpressrighticonsec}
                 />:null
           }
            
            {props. righticonfirstvisible?
            <PrimaryImageAction 
                 primaryimagestyle={styles.logo} 
                 primaryimagesource={props.righticonfirst}
                 onPress={props.onpressrighticonfirst}
                 />:null
           }
       

        </View>
    </View>
)
}
export default HeaderComponent
const styles = StyleSheet.create({

logo:{
    width:20,
    height:20,
    margin:5
},
headerbarview:{
    flexDirection:'row',
   
    padding:10,
    justifyContent:'space-between'
},
headerbarviewleft:{
    flexDirection:'row',
    alignItems:'center'
},
headerbarviewright:{
    flexDirection:'row',
},
title:{
    marginLeft:10,
    marginRight:10,
    fontSize:20
}

})