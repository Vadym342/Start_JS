// !Context this,  call ,bind, apply


function hello(){
    console.log('Hello',this);
}

const person ={
 name:'Vasyan',
 age: 22,
 sayHello: hello,
 sayHelloWindow: hello.bind(document),              // bind context window  
logInfo: function(job,phone)
{
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
}
}

const vasyan={
name:'Vasyan',
age:23

}

//person.logInfo.bind(vasyan)();                // ? bind return new function with new context\ (without showing )
const fnVasyanInfoLog= person.logInfo.bind(vasyan,'Frontent','89044444');    //  ?add params to func
fnVasyanInfoLog();
//fnVasyanInfoLog('Frontent','89044444');

//person.logInfo.call(vasyan,'Frontend','34343434');  // ? return new function with showing data

person.logInfo.apply(vasyan, ['Frontend','34343434']);   // ? always  2 params, return new function with showing data

const array =[1,2,3,4,5];
/*
function multBy(arr,n){
return arr.map(function(i){
    return i*n;
})

}
console.log(multBy(array,5));

*/
Array.prototype.multBy= function(n){
    return this.map(function(i){
        return i*n;
})
}

console.log(array.multBy(2));


