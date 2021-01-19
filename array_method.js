//! Array method

const people=[
{name:'fff',age:5,budget:4444},
{name:'aaa',age:32,budget:5555},
{name:'bbb',age:55,budget:6666},
{name:'cc',age:77,budget:5555}
]
/*
for(let i=0;i<people.length;i++)    //while //ES5
{
    console.log[people[i]];
}

for(let person of people){             // ES6
    console.log(person);
}
*/

//? forEach
/*
people.forEach(function(person){            //2param index, 3 param pArr
    console.log(person);
    console.log(index);
    console.log(pArr);
})
*/
people.forEach(person=>console.log(person));
//? Map
const newPeople = people.map(person=>{
    return `${person.name} (${person.age})`
})
console.log(newPeople);
//? Filter
const adults = people.filter(person=>person.age>=18);
console.log(adults);
//? Reduce
const amount= people.reduce((total,person)=> total+person.budget,0);
//? Find
const p = people.find(person=>person.name==='fff');
console.log(p);
//?FindIndex

const pIndex = people.findIndex(person=>person.name==='fff');
console.log(pIndex);

// !==============
console.log('==============')
const amoutt = people
.filter(person=>person.budget>5000)
.map(person=>{
    return{
        info: `${person.name} (${person.age})`,
        budget: Math.sqrt(person.budget)
    }
})
.reduce((total,person)=>total+person.budget,0)
console.log(amoutt); 
