import { TextInput, View } from "react-native"
import React from 'react';
interface PrimaryInputProps{

}

const PrimaryInput:React.FC<PrimaryInputProps>=props=>{

    return(
        <View>
                <TextInput
                style={{}}
                value={''}
                onChangeText={()=>{}}
                placeholder={''}
                />
        </View>
    )
}
export default PrimaryInput