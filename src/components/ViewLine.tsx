import React from 'react'
import {View,StyleSheet} from 'react-native'
export default function ViewLine(){
    return(
        <View style={styles.line}></View>
    )
}

const styles=StyleSheet.create({
    line:{
        backgroundColor:'grey',
        height:1

    }
})