const { fetchUser } = require("../Api")
const { USERFETCH, USERSUCCESS, USERERROR } = require("./Constants")


const  userAction = async() => dispatch=>{
    return new Promise((resolve,reject)=>{
        dispatch({type:USERFETCH})
      fetchUser().then(res=>{
        dispatch({type:USERSUCCESS,payload:res.json()})
        resolve(res)
      }).catch(error=>{
        dispatch({type:USERERROR})
        reject(error)
      })

    })
}

export{
    userAction
}