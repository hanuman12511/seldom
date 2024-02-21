import React, { useState } from 'react'
import {View,Text, TextInput, StyleSheet, Alert, SafeAreaView} from 'react-native'
import PrimaryInput from '../components/PrimaryInput'
import { String } from '../localization'
import { moderateScale, scale } from '../utils/ScalingUtils'
import { icons } from '../assets/appIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PrimaryButton from '../components/PrimaryButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
function RegisterScreen({navigation}:any){
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[passwordmode,setPasswordMode] = useState(true)
    
    const onChangeEmail=(value:any)=>{
        console.log("vale email",value);
        
        setEmail(value)
    }

    const onChangePassword=(value:any)=>{
        console.log("vale email",value);
        
        setPassword(value)
    }

    const onPressLogin=()=>{
        console.log(email);
        console.log(password);
        Alert.alert("Login")
        navigation.navigate('login')
        }

        const onPresssignup=()=>{
            console.log(email);
            console.log(password);
            Alert.alert("signup")
            }
    


    const onPressImageVisiblePassword=()=>{
        
        setPasswordMode(!passwordmode)
    }
   
    return(
        <SafeAreaView>
             <KeyboardAwareScrollView>
    
            <View style={styles.logo}>
                <Text>
                    Logo
                </Text>
            </View>
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
                placeholder={String.createpasswordplaceholder}
                onchangetext ={onChangePassword}
                value={password}
                inputicon={true}
                inputimage={icons.password}
                inputvisibleicon={true}
                visibleicon={passwordmode?icons.notvisible:icons.visible}
                textvisible={true}
                text={String.password}
                textstyle={styles.textstyle}
                onPressImageVisiblePassword={onPressImageVisiblePassword}
                maxLength={10}
                secureTextEntry={passwordmode}
            />
              <PrimaryInput 
               text={String.confirmpassword}
                mainviewstyle={styles.maininputviewstyle}
                inputstyle={styles.inputstyle}
                viewstyle={styles.inputviewstyle}
                placeholder={String.confirmpasswordplacehoder}
                onchangetext ={onChangePassword}
                value={password}
                inputicon={true}
                inputimage={icons.password}
                inputvisibleicon={true}
                visibleicon={passwordmode?icons.notvisible:icons.visible}
                textvisible={true}
               
                textstyle={styles.textstyle}
                onPressImageVisiblePassword={onPressImageVisiblePassword}
                maxLength={10}
                secureTextEntry={passwordmode}
            />
          
            <PrimaryButton
            primarytext={String.signup}
            primarystyle={styles.loginbtn}
            textstyle={styles.btntextstyle}
            onPressLogin={onPresssignup}
            />
            <View style={styles.signupviewstyle}>
                <Text>{String.alreadyhaveaccount}</Text>
                <TouchableOpacity onPress={onPressLogin}>
                <Text style={styles.signuptext}>{String.login}</Text>
                </TouchableOpacity>
            </View>
       
        </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default RegisterScreen


const styles = StyleSheet.create({

    logo:{
        width:moderateScale(160),
        height:moderateScale(160),
        backgroundColor:'blue',
        alignSelf:'center',
        marginTop:moderateScale(20)

    },
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
    },
    loginbtn:{
        backgroundColor:'blue',
        marginHorizontal:moderateScale(10),
        padding:20,
        borderRadius:moderateScale(10),
        alignItems:'center',
        marginTop:moderateScale(20)
        
    },
    btntextstyle:{
        color:'#fff',
        fontSize:moderateScale(16)
    },
    signupviewstyle:{
        flexDirection:'row',
        alignSelf:'center',
        padding:moderateScale(10)
    },
    signuptext:{
        color:'blue',
        marginLeft:moderateScale(5)
    }
    
    })