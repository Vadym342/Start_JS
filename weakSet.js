//! WeakSet

const users=[
    {name:'Vasyn'},
    {name: 'Bob'},
    {name: 'Alex'}
    ]


const visits = new WeakSet();

visits.add(users[0]).add(users[1]);

users.splice(1,1);

console.log(visits.has(users[0]));
console.log(visits.has(users[1]));