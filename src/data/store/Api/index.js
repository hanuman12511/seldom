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

/* fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
}) */

export const BASE_URL = '';

/* const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'multipart/form-data',
  },
});
 */


/* const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'your-api-key',
    'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
  },
  body: JSON.stringify(joke)
};
fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
 */


// Methods
let basicurl ="http://localhost:4000/"
export const makeRequest = async (
  url,
  params = null,
) => {
  return new Promise(async(resolve,reject)=>{

    console.log(url);
    let info = {};
    if (params) {
      info.method = 'POST';
      /* info.headers={ 
        'content-type': 'multipart/form-data',
      } */
      info.headers= {
        'Content-Type': 'application/json',
      }
     /*  const formData = new FormData();
      for (const key in params) {
        if (key === 'images' && Array.isArray(params[key])) {
          for (const Mem of Object.keys(params[key])) {
            formData.append(key + '[]', params[key][Mem]);
          }
        } else {
          formData.append(key, params[key]);
        }
      }
      console.log(formData);
      info.data = formData; */
    info.body=JSON.stringify(params)
      }
      else{
        info.method="get";
        info.headers= {
          "Content-Type": "application/json"
        }}
       console.log(info);
        fetch("http://192.168.130.148:4000/loginuser",info).then(res=>{
          console.log(" api",res);
          resolve(res)
        }).catch(error=>{
          console.log("erooorr api");
          reject(error)
        })
  })

};