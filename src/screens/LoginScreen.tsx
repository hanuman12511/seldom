import React, { useState } from 'react'
import {View,Text, TextInput, StyleSheet} from 'react-native'
import PrimaryInput from '../components/PrimaryInput'
import { String } from '../localization'
import { moderateScale } from '../utils/ScalingUtils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { icons } from '../assets/appIcons'
function LoginScreen(){
    const[email,setEmail] = useState('')
    const onChangeEmail=(value:any)=>{
        console.log("vale email",value);
        
        setEmail(value)
    }
    return(
        <KeyboardAwareScrollView>
        <View>
           
            <PrimaryInput 
                mainviewstyle={styles.maininputviewstyle}
                inputstyle={styles.inputstyle}
                viewstyle={styles.inputviewstyle}
                placeholder={String.passwordplaceholder}
                onchangetext ={onChangeEmail}
                value={email}
                inputicon={true}
                inputimage={icons.username}
                inputvisibleicon={false}
                textvisible={true}
                text={String.email}
                textstyle={styles.textstyle}
            />
             <PrimaryInput 
                mainviewstyle={styles.maininputviewstyle}
                inputstyle={styles.inputstyle}
                viewstyle={styles.inputviewstyle}
                placeholder={String.passwordplaceholder}
                onchangetext ={onChangeEmail}
                value={email}
                inputicon={true}
                inputimage={icons.password}
                inputvisibleicon={true}
                textvisible={true}
                text={String.password}
                textstyle={styles.textstyle}
            />
            <View style={styles.forgotview}>
                <Text style={styles.forgottext} >
                    {String.forgotpassword}
                </Text>
            </View>
        </View>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
maininputviewstyle:{
    margin:moderateScale(5),
    borderRadius:moderateScale(10),
    paddingHorizontal:moderateScale(5),
},
inputviewstyle:{
    borderWidth: 1,
    borderColor:'gray',
    borderRadius:moderateScale(10),
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:moderateScale(5),
},
inputstyle:{
   
    flex:1
},
textstyle:{
    paddingVertical:moderateScale(10),
    fontSize:moderateScale(18)
},
forgotview:{
    alignItems:'flex-end'
},
forgottext:{
    marginRight:moderateScale(10),
    marginVertical:moderateScale(10),
    color:'blue'
}
})