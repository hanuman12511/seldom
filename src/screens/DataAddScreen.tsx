import React, { useEffect, useState } from "react"
import{Text, View,StyleSheet, Animated, TouchableOpacity, Image, TextInput, Keyboard, Alert, ScrollView, RefreshControl} from 'react-native'
import PrimaryInput from "../components/PrimaryInput";
import PrimaryButton from "../components/PrimaryButton";
import firestore from '@react-native-firebase/firestore';
export default function  DataAddScreen(){
    const [animation] = useState(new Animated.Value(0));
const [name,setName] =useState("")
const [shopname,setShopName] =useState("")
const [phone,setPhone] =useState("")
const [data,setData] =useState([])
const [refreshing, setRefreshing] = React.useState(false);



const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    fetchData()
  }, []);



useEffect(()=>{
fetchData()
},[])

const fetchData=async()=>{
    const users = await firestore().collection('shop').get();
   /*  console.log(users._docs); */
    let data:any = []
    users._docs.forEach((element:any) => {
           /*  console.log(element._data); */
            data.push(element._data)
            
    });
     setData(data)
}


    const startAnimation = () => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 500, // Adjust duration as needed
          useNativeDriver: true,
        }).start();
      };
      const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [500, 0], // Start from bottom (300) to top (0)
      });
      const stopanimation=()=>{
        Animated.timing(animation, {
            toValue: 0,
            duration: 500, // Adjust duration as needed
            useNativeDriver: true,
          }).start();

      }
      const onPressButton=()=>{
        /* console.log(name);
        console.log(shopname);
        console.log(phone);
         */
        if(name!=="" && shopname!==""&&phone!==""){
        firestore()
        .collection('shop')
      
        .add({
          name: name,
        shopname:shopname,
        phone:phone
        })
        .then(() => {
            Alert.alert("add data")
        });
        Keyboard.dismiss()
        stopanimation()
        setName("")
        setPhone("")
        setShopName("")
        fetchData()
    }
    else{
        Alert.alert("pls add data")
    }
      
      }


console.log(data);


    return(
        <View style={styles.mainview}>
             <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.datashow}>
              {
              data&&data.map(d=>(
                <View style={styles.showdatashopview}>
                    <Text style={styles.text}>{d.name}</Text>
                    <Text style={styles.text}>{d.shopname}</Text>
                    <Text style={styles.text}>{d.phone}</Text>
                    <View style={styles.buttoncalleditview}>
                    <TouchableOpacity onPress={startAnimation} style={styles.callbutton}>
                    <Image source={require("../assets/icons/call.png")} style={styles.callicon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={startAnimation} style={styles.callbutton}>
                    <Image source={require("../assets/icons/edit.png")} style={styles.callicon}/>
                    </TouchableOpacity>
                    </View>
                </View>
              ))
                }
            </View>
            <View style={styles.addview}>
            <TouchableOpacity onPress={startAnimation}>
                    <Image source={require("../assets/icons/add.png")} style={styles.bikelogo}/>
                    </TouchableOpacity>
            </View>
            <Animated.View style={[styles.bikeshow, {transform: [{ translateY }]}]}>
                <View style={styles.innerbikeshowview}>
                    <PrimaryInput
                    placeholder="Pls Enter Name.."
                    value={name}
                    onchangetext={(name:any)=>setName(name)}
                    inputstyle={styles.inputname}
                    />
                     <PrimaryInput
                    placeholder="Pls Enter Shop Name.."
                    value={shopname}
                    onchangetext={(name:any)=>setShopName(name)}
                    inputstyle={styles.inputname}
                    />
                     <PrimaryInput
                    placeholder="Pls Enter Phone.."
                    value={phone}
                    onchangetext={(name:any)=>setPhone(name)}
                    inputstyle={styles.inputname}
                    />
                    <PrimaryButton
                    primarytext="Submit"
                    onPressLogin={onPressButton}
                    primarystyle={styles.button}
                    textstyle={styles.textbutton}
                    
                    />

                </View>
                <View style={styles.closeanimation}>
                    <TouchableOpacity onPress={stopanimation}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            </ScrollView>
        </View>
        
    )
}

const styles=StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
    mainview:{
        flex:1,
        backgroundColor:'red'
    },
    datashow:{
        flex:1,
        backgroundColor:'yellow'
    },
    addview:{
        position:'absolute',
        right:10,
        bottom:20,
       
    },
    bikeshow:{
        width:'100%',
        height:400,
        backgroundColor:'#fff',
        position:'absolute',
        bottom:10,
        left:0,
        right:0,
        borderRadius:20,
        elevation:20,
        zIndex:20
       },
       innerbikeshowview:{
        backgroundColor:'yellow',
        height:'70%',
        marginVertical:'15%'

       },
       closeanimation:{
        position:'absolute',
        right:10,
        top:10
       },
       bikelogo:{
        width:50,
        height:40
       },
       callicon:{
        width:30,
        height:30,
       },
       inputname:{
        backgroundColor:'#fff',
        marginHorizontal:10,
        marginVertical:10,
        padding:10,
        borderRadius:10
       },
       button:{
            backgroundColor:'#fff',
            marginHorizontal:10,
            alignItems:'center',
            justifyContent:'center',
            padding:10,
            borderRadius:10
       },
       
       textbutton:{
        fontSize:20
       }
,
       showdatashopview:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        padding:10,
        backgroundColor:'gray',
        marginVertical:5,
        borderRadius:10,
        alignItems:'center'
       },
       text:{
        color:"#fff",
        marginHorizontal:5
       },
       callbutton:{
        padding:5,
        backgroundColor:'green',
        borderRadius:10,
        marginLeft:5
       },
       buttoncalleditview:{
        flexDirection:'row',
        
       }

})