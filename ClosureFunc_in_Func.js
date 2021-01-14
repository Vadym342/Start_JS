// ! Closure = function in function 
function createCalcFunction(n){
return function(){
    console.log(1000*n);
}
}
const calc = createCalcFunction(42);
calc(); 

console.log('____________________');
function createIncrementor(n){
    return function(num){

        return n+num;
    }
}
const addOne = createIncrementor(1);
const addTen= createIncrementor(10);

console.log(addOne(10));
console.log(addOne(41));

console.log(addTen(10));
console.log(addTen(41));
console.log('____________________');

function urlGenerator(domain){
    return function(url){
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com');
const uaUrl = urlGenerator('ua');
console.log(comUrl('google'));
console.log(uaUrl('fff'));
console.log('____________________');

function mybind(context, fn){                     // TODO: /////////////////////////////
  return function(...args){
     fn.apply(context, args);
  } 
}

function logPerson()
{
    console.log(`Perosn :${this.name}, ${this.age}, ${this.job}`);  
}

const person1= {name:'Vasyna',age:22,job:'Frontend'}

mybind(person1,logPerson)();