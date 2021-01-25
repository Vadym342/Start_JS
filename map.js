// !Map

const obj={
    name:'Vasyan',
    age:22,
    job:'fff'
}

const entries=[
    ['name','Vasyan'],
    ['age',22],
    ['job','fff']
]

//console.log(Object.entries(obj));
//console.log(Object.fromEntries(entries));

const map = new Map(entries);


console.log(map.get('job'));

map
.set('newField',42)
.set(obj,'value of object')
.set(NaN,'NaN');
//console.log(map);

//console.log(map.get(obj));
//map.delete('job')               //? return true or false
//console.log(map.has('job'));
//console.log(map.size);
//map.clear();
//console.log(map.size);

//for(let [key,value] of map){                //map.entries
//console.log(key,value);
//}
/*
for (let val of map.values()){
    console.log(val);
}

for(let key of map.keys()){
console.log(key);
}
*/
/*
map.forEach((val,key, m)=>{
console.log(val,key);
})
*/

//?=====================
//const array = [...map];
//const array = Array.from(map);
//console.log(array);
//const mapObj= Object.fromEntries(map.entries());
//console.log(mapObj);

//?=====================

const users=[
{name:'Vasyn'},
{name: 'Bob'},
{name: 'Alex'}
]

const visits = new Map();

visits
.set(users[0], new Date())
.set(users[1],new Date( new Date().getTime()+1000*60))
.set(users[2],new Date( new Date().getTime()+3000*60))

function lastVisit(user){
    return visits.get(user);
}

console.log(lastVisit(users[2]));
