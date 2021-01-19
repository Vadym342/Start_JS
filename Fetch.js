// !Fetch 
const requestUrl='https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body=null){
    const headers={
        'Content-Type':'application/json'
    }
 return fetch(url,{
     method:method,
     body:JSON.stringify(body),
     headers: headers
 }).then(response=>{
     if(response.ok){                 // status
     return response.json();          //response.text();
     } 
     return response.json().then(error=>{
         const e= new Error('Some errors');
         e.data=error;
         throw e;
     })
 })
}
//! ------------
/*
sendRequest('GET',requestUrl)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
*/
const body ={
    name:'Vasyan',
    age: 33
}

sendRequest('POST',requestUrl,body)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
