import { fetchHome } from "../Api"
import { USERFETCH, USERSUCCESS, USERERROR } from"./Contants"


const homeAction=async()=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        dispatch({type:USERFETCH})
        fetchHome().then((res)=>{
            dispatch({
            type:USERSUCCESS,
            payload:res.json()
        }),
        resolve(res)
    }
    ).catch((error)=>{
        dispatch({
              type:USERERROR,

        }),
        reject(error)
      
      })
    })
}
export{
    homeAction
}