import { Image } from "react-native"

interface PrimaryImageProps{
    primaryimagesource?:any,
    primaryimagestyle?:any
}
const PrimaryImage:React.FC<PrimaryImageProps>=props=>{
    return(
        <Image source={props.primaryimagesource}
        style={[props.primaryimagestyle, { alignSelf: 'center' },]}
        />
    )
}
export default PrimaryImage