export const fetchHome=async()=>{
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/todos",{  method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }})
        .then((res)=>{resolve(res)})
        .catch((error)=>{reject(error)})
    })
}


export const fetchUser=async()=>{
  return new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/users",{  method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }})
    .then((res)=>{resolve(res)})
    .catch(error=>reject(error))
  })
}