const { USERFETCH, USERSUCCESS, USERERROR } = require("./Constants")

const instialState={
    userdata:{},
    loading:false,
    error:false
}

const userReducers = (state=instialState,action)=>{
    switch(action.type){
        case USERFETCH:
            return{...state,loading:true}
        case USERSUCCESS:
            return{...state,loading:false,userdata:action.payload}
        case USERERROR:
            return{...state,error:true,loading:false}
        default:return state
    }

}
export {
    userReducers
}