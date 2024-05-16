import { USERERROR, USERFETCH, USERSUCCESS } from "./Contants"

let instialState={
    userdata:{},
    loading:false,
    error:false
}
export const loginReducers=(state=instialState,action)=>{
    switch(action.type){
        case USERFETCH:
            return{...state,loading:true}
        case USERSUCCESS:
            return {...state,userdata:action.payload,loading:false}
        case USERERROR:

            return{...state,loading:false,error:false}
        default:
                return state
        }

}

