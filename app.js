// !Variables
//camelCase
const firstName="Vasyan";

let age=32;
console.log(age);

const _private = 'private';
const _ = 'private';
const $ = 'private';
const withNum5='5';


//
//console.log('Name :'+firstName+'Age :'+age);
//alert('Name :'+firstName+'Age :'+age); //  ? alert on the browser
const lastName = prompt('Enter LastName', '');
console.log('Name :'+firstName+'LastName :'+lastName);

// !Operators
console.log(_______Operators_______);
let currentYear=2021;
const birthYear = 2002;
const agge =1;

console.log(currentYear++);
console.log(++currentYear);
// !Data types
console.log(_______Data_types_______);
const A='fff';
const B=true;
const C= 22;
let x;
null;
console.log(typeof A); //B , C
console.log(typeof x); 
console.log(typeof null); // ? object = bug, null=null

// !Operator priority
console.log(_______Operator_priority_______);
const fullAge=21;
const birth = 2000;
const current = 2021;
const isFullAge= current-birthYear>=fullAge; // ? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// !Сonditional operators
console.log(_______Сonditional_operators_______);
const courseStatus = 'pending'; // ready, fail, pending
if(courseStatus === 'ready'){
console.log('Ready');
}else if(courseStatus==='pending '){
    console.log('Pending');
}else
{
     console.log('fail');
}

const isReady =false;
if(isReady)
{
console.log('Ready');
}
else
{
    console.log('Not Ready');
}

// !Ternary expression
console.log(_______Ternary_expression_______);
isReady ? console.log('Ready') : console.log('Not Ready');

const num1 = 42;
const num2 ='42';
console.log(num1 ===num2); //  ?  == - to 1 type, === - value and type   

// !Boolian logics  
// ? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators

// !Functions 
console.log(_______Functions_______);

function calcucateAge(year)
{

    return 2020-year;
}

console.log(calcucateAge(1999));


function logInfoAbout(name,year)
{
    const q = calcucateAge(year);
    if (q>0)
    {
        console.log('Name :'+name+'Age :'+q);
    }
    else{
         console.log('Its the future');
    }
    

}
logInfoAbout('Vasyan', 1993);

// !Arrays
console.log(_______Arrays_______);
const cars = ['BMW','Toyota','Ford'];
console.log(cars);
const cars1= new Array('BMW','Toyota','Ford');
console.log(cars1);

console.log(cars[1]);
console.log(cars.length);

cars[1]='Porshe';
console.log(cars);
cars[cars.length]='Mazda';

// !Сycles
console.log(_______Сycles_______);
const cars2 = ['BMW','Toyota','Ford'];

for(let i=0;i<cars2.length;i++)
{
 const car= cars2[i];
 console.log(car);

}

for(let car of cars2)
{
console.log(car);
}

// !Objects
console.log(_______Objects_______);
const person ={
 firstName:'Vasya',
 lastName:'Vasyan',
 age:2001,
 languages: ['En','Ua'],
 hasWife: false,
 greet: function(){
     console.log('greet from person');
 }
}
console.log(person.firstName);
person.greet();
const key='languages';
console.log(person[key]);
person.hasWife=true;
person.isProgrammer=true;
