// ! Functions

// ?Function Expresion
const greet2= function greet2(name)
{
    console.log('Hi 2 -', name);
}
greet('Alex');
greet2('Bob');

// ?Function Declaration
function greet(name)
{
    console.log('Hi -', name);
}

console.log(typeof greet); 
console.dir(greet); // __proto__

// !Anonymous Functions 
/* let counter=0;
const interval = setInterval( function(){ //seTTimeout
    if(counter===5){
 clearInterval(interval); // clearTimeout
}else {
 console.log(++counter);
}
}, 1000);
 */
// ! Аrrow functions

const arrow =(name)=>{   
    console.log('Hi -', name);
}

const arrow2=(name) => console.log('Hi -', name);
arrow('Vasyan');
arrow2('Vasyan');

const pow2 = num => num**2;  //return num**2;

console.log(pow2(5));

// ! Default parameters

const sum = (a=40,b=a*2) => a+b;

console.log(sum(22,33));
console.log(sum());

function sumAll(...all){
    let resualt =0;
    for(let numb of all)
    {
        resualt+=numb;
    }
  return resualt;
}
const res=sumAll(1,23,45,5);
console.log(res);

// !Сlosing
function createMember(name){          // ? name not change, lastName different (protect data (name = private))
    return function(lastName) 
    {
        console.log(name+lastName);
    }
}
const logWithLastName = createMember('Vasyan');
console.log(logWithLastName('Vasyn'));
console.log(logWithLastName('Alex'));