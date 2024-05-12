import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNav from './navigations'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import notifee from '@notifee/react-native';
import NotificationController from './helpers/NotificationController';
import { Provider } from 'react-redux';
import store from './data/store/store';


const  App=()=>{

    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    useEffect(()=>{
        setTimeout(()=>{
            SplashScreen.hide();
        },1000)
    },[])

    React.useEffect(()=>{
//NotificationController()
async function show(){
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel",
    });

    // Display a notification
    await notifee.displayNotification({
      title: "Notification Title",
      body: "Main body content of the notification",
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: "default",
        },
      },
    });

    }
    show()

        async function requestUserPermission() {
          const authStatus = await messaging().requestPermission();
          const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        
          if (enabled) {
            console.log('Authorization status:', authStatus);
          }
        }
        requestUserPermission()
        getFcmToken()
        NotificationsScreen()
       
      },[]) 
    async function getFcmToken(){
        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log('Message handled in the background!', remoteMessage);
        });
        let fcmtoken =await AsyncStorage.getItem("fcmtoken")
        console.log('====================================');
        console.log(fcmtoken,"old token");
        console.log('====================================');
        if(!fcmtoken){
          try{
            let fcmtoken = await messaging().getToken()
           
              if(fcmtoken){
                console.log('====================================');
                console.log(fcmtoken,"new token");
                console.log('====================================');
               await AsyncStorage.setItem("fcmtoken",fcmtoken)
              }
          }
          catch(err){
      console.log('====================================');
      console.log(err);
      console.log('====================================');
          }
        }
        else{
      
        }/* 
         const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
      
        return unsubscribe;    */
        const unsubscribe = messaging().setBackgroundMessageHandler(async remoteMessage => {
          Alert.alert('A new F', JSON.stringify(remoteMessage));
        });
      
        return unsubscribe;    
     
      } 
      
    function NotificationsScreen(){
        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
          });
          messaging()
            .getInitialNotification()
            .then(remoteMessage => {
              if (remoteMessage) {
                console.log(
                  'Notification caused app to open from quit state:',
                  remoteMessage.notification,
                );
               }
              });
              messaging().onMessage(async re=>{
                console.log('====================================');
                console.log("nofi",re);
                console.log('====================================');
              })
        
      }
    return(
        <>
        <Provider store={store}>
      
            <NavigationContainer>
            <StackNav/>
            </NavigationContainer>
            </Provider>
        </>
    )
}
export default App