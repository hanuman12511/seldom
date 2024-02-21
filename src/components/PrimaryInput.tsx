import { Image, TextInput, View,StyleSheet } from "react-native"
import React from 'react';
import PrimaryImage from "./PrimaryImage";
import { icons } from "../assets/appIcons";
import { moderateScale, scale } from "../utils/ScalingUtils";
import PrimaryText from "./PrimaryText";
import { String } from "../localization";
interface PrimaryInputProps{
    placeholder?:string
    value?:string
    onchangetext?:any
    viewstyle?:any
    inputstyle?:any
    inputicon?:boolean
    inputimage?:any
    inputvisibleicon?:boolean
  
    mainviewstyle?:any
    textvisible?:boolean
    text?:string
    textstyle?:any

}

const PrimaryInput:React.FC<PrimaryInputProps>=props=>{

    return(
        <View style={props.mainviewstyle}>
           {   props.textvisible?
            <PrimaryText text={props.text} style={props.textstyle}/>
             :null    
        }
           <View  style={props.viewstyle}>
              {props.inputicon?
                <PrimaryImage 
                 primaryimagestyle={styles.imageicon} 
                 primaryimagesource={props.inputimage}
                 />:null
              }
                <TextInput
                style={props.inputstyle}
                value={props.value}
                onChangeText={props.onchangetext}
                placeholder={props.placeholder}
                />
              { props.inputvisibleicon?
                <PrimaryImage 
                 primaryimagestyle={styles.imagevisibleicon} 
                 primaryimagesource={icons.notvisible}
                 />
                 :null
              }
            </View>
        </View>
    )
}
export default PrimaryInput

const styles =StyleSheet.create({
   imageicon:{
    width:moderateScale(30),
    height:moderateScale(30),
    resizeMode: 'contain',
   } ,
   imagevisibleicon:{
    width:moderateScale(30),
    height:moderateScale(30),
    resizeMode: 'contain',
   }
})