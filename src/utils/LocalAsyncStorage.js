import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData=async( key,value)=>{
    try {
        await AsyncStorage.setItem(key,value)
    } catch (error) {
        console.log("error=>",error);
    }
    console.log("data add");
}

const getData=async(key)=>{
    let  data=''
    try {
         data = await AsyncStorage.getItem(key)
        
    } catch (error) {
        console.log("error=",error);
    }
    console.log("data get succussfully");
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