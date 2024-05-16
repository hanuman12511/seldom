
import { fetchHome, makeRequest } from "../Api"
import { USERFETCH, USERSUCCESS, USERERROR } from"./Contants"





const loginAction=async(data)=>(dispatch)=>{
    
      
    return new Promise((resolve,reject)=>{
       // dispatch({type:USERFETCH})
       makeRequest("loginuser",data).then((res)=>{
        console.log("*************************");
        console.log(res);
        console.log("****************************");
           /*  dispatch({
            type:USERSUCCESS,
            payload:res.json()
        }), */
       
        resolve(res)
    }
    ).catch((error)=>{
        /* dispatch({
              type:USERERROR,

        }), */
        console.log("(((((((((((((((((((((((((((((((");
        reject(error)
      
      })
    })
}
export{
    loginAction
}