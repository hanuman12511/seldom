import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData=async( key,value)=>{
    try {
        await AsyncStorage.setItem(key,value)
    } catch (error) {
        console.log("error=>",error);
    }
    return true
}

const getData=async(key)=>{
    let  data=''
    try {
         data = await AsyncStorage.getItem(key)
        
    } catch (error) {
        console.log("error=",error);
    }
   
    return data
}

const removeData=async(key)=>{

    try {
        await AsyncStorage.removeItem(key)

    } catch (error) {
        
        console.log("error=>",error);
    }
}

export{
    storeData,getData,removeData
}