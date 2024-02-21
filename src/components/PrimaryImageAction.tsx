import { Image,TouchableOpacity } from "react-native"

interface PrimaryImageProps{
    primaryimagesource?:any,
    primaryimagestyle?:any
    onPress?:any
 }
const PrimaryImageAction:React.FC<PrimaryImageProps>=props=>{
    return(
        <TouchableOpacity onPress={props.onPress}>
        <Image source={props.primaryimagesource}
        style={[props.primaryimagestyle, { alignSelf: 'center' },]}
        />
        </TouchableOpacity>
    )
}
export default PrimaryImageAction