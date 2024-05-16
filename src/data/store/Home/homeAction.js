import { fetchHome, makeRequest } from "../Api"
import { USERFETCH, USERSUCCESS, USERERROR } from"./Contants"


const homeAction=async(data)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        dispatch({type:USERFETCH})
       makeRequest("https://fakestoreapi.com/products").then((res)=>{
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