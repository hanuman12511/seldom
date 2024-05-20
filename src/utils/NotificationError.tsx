/* import { useFocusEffect } from "@react-navigation/native"
import React, { useCallback, useEffect, useState }  from "react"
import {View,Text} from 'react-native'
interface NotificationErrorProps{
    text:any,
    isShowMessage:any
} 
const NotificationError:React.FC<NotificationErrorProps>=(props)=>{
 
    
    const[isShow,setShow] = useState(false)
 
    useEffect(
        React.useCallback(() => {
            setShow(props.isShowMessage)
    
            setTimeout(()=>{
                setShow(false)
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

export default NotificationError */

import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    unstable_batchedUpdates,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Images from '../assets/images';

import type { FlashMessageParams } from './Type';
import { moderateScale } from '../utils/ScalingUtils';

const  NotificationError = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('default');
    const [success, setSuccess] = useState(false);

  /*   const timerRef = useRef<NodeJS.Timeout>(); */

    useEffect(() => {
        const init = () => {
            //initialize
        };
        init();
        return () => {
           /*  if (timerRef.current) {
                console.log("))))",timerRef.current);
                
                clearTimeout(timerRef.current);
            } */
        };
    }, []);

    useImperativeHandle(
        ref,
        () => ({
            show: (params: FlashMessageParams) => {
               /*  if (timerRef.current) {
                    console.log(timerRef.current);
                    
                    clearTimeout(timerRef.current);
                } */
                const tM = params.duration ?? 3000;
                unstable_batchedUpdates(() => {
                    setVisible(true);
                    setMessage(params.message);
                    setSuccess(params.success ?? false);
                });
                setMessage(params.message);
                setTimeout(() => {
                    setVisible(false);
                }, tM);
            },
            hide: () => {
                setVisible(false);
            },
        }),
        [],
    );

    if (!visible) {
        return null;
    }
    return (
        <View style={[styles.container, ]}>
            {!success ? (
            <></>    
            ) : 
              <></>  
            }
            <Text >{message}</Text>
        </View>
    );
});

export default  NotificationError;

const styles = StyleSheet.create({
    container: {
        
        minHeight: 40,
        marginTop: getStatusBarHeight(true) + 10,
        position: 'absolute',
        padding: 10,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        borderWidth: moderateScale(1)
    },
});