// ! Promise

console.log('Request data..');

/*
setTimeout(()=>{                    // callback
console.log('Preparing data...');
const backendData ={
    server: 'aws',
    port: 2000,
    status: 'working '
}

setTimeout(()=>{
    backendData.modified= true; 
console.log('Data received', backendData)
},2000)

});
*/
const p = new Promise((resolve, reject)=>{  //?  resolve = whem async function  end successfully
setTimeout(()=>{
    console.log('Preparing data...')
    const backendData ={
        server: 'aws',  
        port: 2000,
        status: 'working '
    }
    resolve(backendData);
},2000)
})
p.then(data=>{                                               // example .then = chain;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            data.modified= true; 
            resolve(data);       // reject error;
        },2000)
    })
})
.then(clientData=>{
    console.log('Data recevied',clientData);
    clientData.fromPromise=true;
    return clientData;
}).then(data=>{
    console.log('Modified',data);
})
.catch(err=>console.error('Error:',err))
.finally(()=>{
    console.log('Finally');
})


const   sleep = ms=>{
   return new Promise(resolve=>{
       setTimeout(()=>resolve(),ms)

    });
}

sleep(2000).then(()=>console.log('After 2 sec'));
sleep(3000).then(()=>console.log('After 3 sec'));


Promise.all([sleep(5000),sleep(7000)])
    .then(()=>{
        console.log('All promises');
    })   


Promise.race([sleep(5000),sleep(7000)])
    .then(()=>{
        console.log('Race promises');
    }) 