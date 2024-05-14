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



export const BASE_URL = '';

/* const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'multipart/form-data',
  },
});
 */
// Methods
export const makeRequest = async (
  url,
  params = null,
) => {
  return new Promise(async(resolve,reject)=>{

    let info = {};
    info.url = url;
    if (params) {
      info.method = 'POST';
      info.headers={ 
        'content-type': 'multipart/form-data',
      }
      const formData = new FormData();
      for (const key in params) {
        if (key === 'images' && Array.isArray(params[key])) {
          for (const Mem of Object.keys(params[key])) {
            formData.append(key + '[]', params[key][Mem]);
          }
        } else {
          formData.append(key, params[key]);
        }
      }
      info.data = formData;
    
      }
      else{
        info.method="get";
        info.headers= {
          "Content-Type": "application/json"
        }}

        console.log(info);
        fetch("https://jsonplaceholder.typicode.com/users",{info}).then(res=>{
          resolve(res)
        }).catch(error=>{
          reject(error)
        })
  })

};