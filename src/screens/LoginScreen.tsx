import React, { useEffect, useState } from 'react'
import {View,Text, TextInput, StyleSheet, Alert} from 'react-native'
import PrimaryInput from '../components/PrimaryInput'
import { String } from '../localization'
import { moderateScale } from '../utils/ScalingUtils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { icons } from '../assets/appIcons'
import PrimaryButton from '../components/PrimaryButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScreenLoading from '../utils/ScreenLoading'
import { navigaionstring } from '../navigations/navigationString'
import { storeData } from '../utils/LocalAsyncStorage'
import { AuthContext } from '../utils/authContext'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../data/store/auth/loginAction'
import NotificationError from '../utils/NotificationError'
function LoginScreen({navigation}:any){

    const[isShowMessage,setIsShowMessage] = useState(false)
    const[email,setEmail] = useState('')
    const[message,setMassage] = useState('')
    const[password,setPassword] = useState('')
    const[passwordmode,setPasswordMode] = useState(true)
     const[isLoding ,setIsLoding] = useState(false)
     const { signIn } = React.useContext(AuthContext);
    const dispatch:any =useDispatch()

/* const data = useSelector(state=>state?.login)
console.log("***************",data);

const{error,loading,userdata}=data
console.log(userdata);
const{message,success}=userdata
 */

    useEffect(()=>{
    console.log("loginscreen");

       
    },[])

    const onChangeEmail=(value:any)=>{
        console.log("vale email",value);
        
        setEmail(value)
    }

    const onChangePassword=(value:any)=>{
        console.log("vale email",value);
        
        setPassword(value)
    }

    const onPressLogin= async()=>{
    
     console.log("login button");
     
        let params={
            email:email,
            password:password
        }
     
        dispatch(
            loginAction(params))
            .then((res:any)=>res.json())
            .then((data:any)=>signIn(data))
            .catch((err:any)=>{
                console.log(err);
                setIsShowMessage(true)
                setMassage(err)
               
            }
            ) 
            
          
           
        //signIn(email,password)
        }
    const onPressImageVisiblePassword=()=>{
        setPasswordMode(!passwordmode)
    }
    const onPressSigup=()=>{
    
        navigation.navigate(navigaionstring.signup)
    
    }
    const onPressForgot=()=>{
        Alert.alert("forgot")
    }

    console.log("**************",isShowMessage,"**********************");
    
    return(
        <>
        <KeyboardAwareScrollView>
        <View>
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
                placeholder={String.passwordplaceholder}
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
            <View style={styles.forgotview}>
                 <TouchableOpacity onPress={onPressForgot}>
                <Text style={styles.forgottext} >
                    {String.forgotpassword}
                </Text>
                </TouchableOpacity>
            </View>
            <PrimaryButton
            primarytext={String.login}
            primarystyle={styles.loginbtn}
            textstyle={styles.btntextstyle}
            onPressLogin={onPressLogin}
            />
            <View style={styles.signupviewstyle}>
                <Text>{String.newaccount}</Text>
                <TouchableOpacity onPress={onPressSigup}>
                <Text style={styles.signuptext}>{String.signup}</Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAwareScrollView>
        <ScreenLoading isLoding={isLoding} />
        {console.log(message,isShowMessage)
        
        
        }
 <NotificationError text={"message"} isShowMessage={isShowMessage}/> 
    </>
    )
}

export default LoginScreen

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
    fontSize:moderateScale(18),
    fontFamily:"BriemHand-ExtraBold"
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
    alignItems:'center'
    
},
btntextstyle:{
    color:'#fff',
    fontSize:moderateScale(16),
    fontFamily:"BriemHand-ExtraBold"
},
signupviewstyle:{
    flexDirection:'row',
    alignSelf:'center',
    padding:moderateScale(10)
},
signuptext:{
    color:'blue',
    marginLeft:moderateScale(5),
    fontFamily:"BriemHand-ExtraBold"
}

})