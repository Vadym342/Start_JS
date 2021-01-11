//!Arrays
const cars= ['ford ','BMW','Mers'];
const fib = [1,1,2,3,5,8,13];
const people=[
    {name: 'Vasyan', budget:42200},
    {name: 'Alex', budget:55550},
    {name: 'Max', budget: 64566},

]
cars.push('Porshe');    


const firstItem = cars.shift();
const lastItem = cars.pop();

console.log(cars);

console.log(cars.reverse());

//const index = cars.indexOf('BMW');
//cars[index]='Toyota';
//console.log(cars);

// ?Сycle
let findedPerson ;
for(const person of people)
{
    console.log(person);
    if(person.budget===42200){
        findedPerson=person;
    }
}
console.log(findedPerson);


/*const index = people.findIndex(function(person){
    return person.budget===42200;

});

const index1 = people.find(function(person){  //TODO: simplify
    return person.budget===42200;

});
console.log(people)
console.log(people[index]);
console.log(index1);
*/
console.log('_________________');
const person=people.find(person=>person.budget===42200);
console.log(person);



//
console.log(cars.includes('BMW'));

const upperCaseCars = cars.map(car=>{
    return car.toUpperCase();
})
console.log(upperCaseCars);
const sqrt=num=>Math.sqrt(num);
const pow2= num=>num**2;
const pow2Fib = fib.map(pow2).map(sqrt);

console.log(pow2Fib);

const pow3= num=>num**3;
const pow3Fib= fib.map(pow3);
const filteredNumbers = pow3Fib.filter(num=>num>20);
console.log(pow3Fib);
console.log(filteredNumbers);
console.log('_________________');

const people1=[
    {name: 'Vasyan', budget:42200},
    {name: 'Alex', budget:55550},
    {name: 'Max', budget: 64566},

]

const allBudget =people1
.filter(person=>person.budget>45000)
.reduce((acc,person)=>{
acc+=people.budget;
return acc; 
},0);

console.log(allBudget);








//Task1 
//const string = 'Hi, aaaa bbb ccc dd ';
//const reverseString = string.split('').reverse().join(' ');
//console.log(reverseString);