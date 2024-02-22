import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,

} from '@react-navigation/drawer';
import { icons } from '../assets/appIcons';
import { moderateScale } from '../utils/ScalingUtils';
import ViewLine from './ViewLine';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigaionstring } from '../navigations/navigationString';

const CustomSidebar = ({navigation,props}:any) => {
 const [logoutuser,setLogoutuser] = useState(false)
 const [dropdown,setDropDown] = useState(false)
 const [dropdownname,setDropDownName] = useState('')
console.log(props);


 const onPressDropDonw=(value:string)=>{
  
  if(value!==dropdownname && dropdown===true){
    setDropDown(dropdown)
    setDropDownName(value)  
  }
  else{
    setDropDownName(value)
    setDropDown(!dropdown)
  
  }
  
 }

 const onPressManage=()=>{
      navigation.navigate(navigaionstring.manager)
 }
 const onPressLeaderBoard=()=>{
  navigation.navigate(navigaionstring.leaderboard)
}
 const onPressSearchLeads=()=>{
  navigation.navigate(navigaionstring.searchleads)
}


  return (
    <SafeAreaView style={{flex: 1}}>
       <DrawerContentScrollView {...props}>
    <View style={styles.profileview}>
      <Image
        source={icons.userprofile}
        style={styles.sideMenuProfileIcon}
      />
      <View>
        <Text style={[styles.usertext]}>Hanu</Text>
        <Text style={[styles.emailtext]}>Hanu@gmail.com</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=>setLogoutuser(!logoutuser)}>
      <Image source={logoutuser?icons.up:icons.down} style={styles.powericon}/>
      </TouchableOpacity>
        </View>
      </View>
      <ViewLine/>
      {logoutuser?<>
        <View style={styles.logoutview}>
        <Text>FreeUser</Text>
        <Image source={icons.power} style={styles.powericon}/>
      </View>
      <ViewLine/></>
      :null
      }
      
      <View style={styles.userhsowview}>
        <Text style={[styles.usertext]}>Hanu</Text>
        <TouchableOpacity  onPress={onPressManage}>
        <Text>change</Text>
        </TouchableOpacity>
      </View>
      <ViewLine/>
      <View style={styles.menuview}>
      <TouchableOpacity onPress={ onPressSearchLeads}>
       <View style={styles.centerobject}>
              <Image source={icons.search} style={styles.powericon}/>
              <Text style={styles.textsize}>Search</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLeaderBoard}>
        <View style={styles.centerobject}>
        
        <Image source={icons.cup} style={styles.powericon}/>
        <Text style={styles.textsize}>Leaderboard</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.centerobject}>
        <Image source={icons.padd} style={styles.powericon}/>
        <Text style={styles.textsize}>Add lead/single</Text>
        </View>
      </View>
      <ViewLine/>

      <View style={styles.sectionview1}>
       <View style={[styles. commanrow]}>
         <View style={[styles.commanrowin]}>
            <Image source={icons.calllist} style={styles.powericon}/>
            <Text style={styles.textleftmargin}>My Calls</Text>
         </View>
        </View>
        <View style={[styles. commanrow]}>
          <View style={[styles. commanrowin]}>
            <Image source={icons.alarm} style={styles.powericon}/>
            <Text style={styles.textleftmargin}>Campaigns</Text>
          </View>
          <TouchableOpacity onPress={()=>onPressDropDonw("Campaigns")}>
          <Image source={icons.down} style={styles.powericon}/>
          </TouchableOpacity>
        </View>
        {dropdown && dropdownname==='Campaigns'?
        <View style={[styles.subview]}>
          <Text>Campaigns</Text>
          <Text>Campaigns</Text>
          <Text>Campaigns</Text>
          <Text>Campaigns</Text>
          <Text>Campaigns</Text>
        </View>
          :null
      }
        <View style={[styles. commanrow]}>
        <View style={[styles. commanrowin]}>
        <Image source={icons.group} style={styles.powericon}/>
        <Text style={styles.textleftmargin}>Leads/Filters</Text>
        </View>
        <TouchableOpacity onPress={()=>{onPressDropDonw("LeadsFilters")}}>
        
        <Image source={icons.down} style={styles.powericon}/>
        </TouchableOpacity>
        </View>
        {dropdown && dropdownname==='LeadsFilters'?
        <View style={[styles.subview]}>
          <Text>LeadsFilters</Text>
          <Text>LeadsFilters</Text>
          <Text>LeadsFilters</Text>
        </View>
          :null
      }
      </View>
      <ViewLine/>
      <View style={styles.sectionview2}>
       <View style={[styles. commanrow]}>
          <View style={[styles. commanrowin]}>
              <Image source={icons.call} style={styles.powericon}/>
                <Text style={styles.textleftmargin}>Call Tracking</Text>
            </View>
            <TouchableOpacity onPress={()=>{onPressDropDonw("CallTracking")}}>
              <Image source={icons.down} style={styles.powericon}/>
            </TouchableOpacity>
        </View>
        {dropdown && dropdownname==='CallTracking'?
        <View style={[styles.subview]}>
          <Text>CallTracking</Text>
          <Text>CallTracking</Text>
          <Text>CallTracking</Text>
          <Text>CallTracking</Text>
        </View>
          :null
      }
        <View style={[styles. commanrow]}>
        <View style={[styles. commanrowin]}>
            <Image source={icons.message} style={styles.powericon}/>
            <Text style={styles.textleftmargin}>Msg Template</Text>
        </View>
        <TouchableOpacity onPress={()=>{onPressDropDonw("MsgTemplate")}}>
           
        <Image source={icons.down} style={styles.powericon}/>
        </TouchableOpacity>
        </View>
        {dropdown && dropdownname==='MsgTemplate'?
        <View style={[styles.subview]}>
          <Text>MsgTemplate</Text>
          <Text>MsgTemplate</Text>
          <Text>MsgTemplate</Text>
          <Text>MsgTemplate</Text>
        </View>
          :null
      }
        <View style={[styles. commanrow]}>
        <View style={[styles. commanrowin]}>
        <Image source={icons.label} style={styles.powericon}/>
        <Text style={styles.textleftmargin}>Labels</Text>
        </View>
        <TouchableOpacity onPress={()=>{onPressDropDonw("Labels")}}>
          <Image source={icons.down} style={styles.powericon}/>
      </TouchableOpacity>
        </View>
        {dropdown && dropdownname==='Labels'?
        <View style={[styles.subview]}>

          <Text>Labels</Text>
          <Text>Labels</Text>
          <Text>Labels</Text>
          <Text>Labels</Text>
        </View>
          :null
      }
        
        <View style={[styles. commanrow]}>
        <View style={[styles. commanrowin]}>
        <Image source={icons.settings} style={styles.powericon}/>
        <Text style={styles.textleftmargin}>Settings</Text>
        </View>
        <TouchableOpacity onPress={()=>{onPressDropDonw("Settings")}}>
     
        <Image source={icons.down} style={styles.powericon}/>
        </TouchableOpacity>
        </View>
        {dropdown && dropdownname==='Settings'?
        <View style={[styles.subview]}>
          <Text>Setting</Text>
          <Text>Setting</Text>
          <Text>Setting</Text>
          <Text>Setting</Text>
        </View>
          :null
      }
       
      </View>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        SUPPORT
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  usertext:{
    fontSize:moderateScale(25),
    color:"#000"
  },
  emailtext:{
    fontSize:moderateScale(16),
    color:"#000"
  },
  centerobject:{
    alignItems:'center'
  },
  textleftmargin:{
    marginLeft:moderateScale(13),
    fontSize:moderateScale(16),
    color:'#000'
  },
  textsize:{
    fontSize:moderateScale(16),
    color:'#000',
    marginVertical:moderateScale(10)
    
  },

  profileview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:moderateScale(15),
    marginVertical:moderateScale(20)
  },
  logoutview:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:moderateScale(20),
    marginVertical:moderateScale(10),
    alignItems:'center'
  },
  powericon:{
    width:moderateScale(25),
    height:moderateScale(25)
  },
  userhsowview:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:moderateScale(10),
    alignItems:'center'
  },
  menuview:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:moderateScale(10),
    marginVertical:moderateScale(10)
  },
  sectionview1:{},
  sectionview2:{},
  commanrow:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    justifyContent:'space-between',
    
    marginVertical:moderateScale(5),
    marginHorizontal:moderateScale(10),
  },
  commanrowin:{
   
    flexDirection:'row',
    alignItems:'center',
    },
    subview:{
      backgroundColor:'red',
     
    }
});

export default CustomSidebar;