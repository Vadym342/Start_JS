// !WeakMap

let obj = {name:'weakMap'}
/*
const arr=[obj]

obj= null;
console.log(obj);
console.log(arr[0]);
*/
                       // ? WeakMap keys only objects
const map = new WeakMap([
    [obj,'obj data']
]);
// get set delete has
obj=null;
console.log(map.has(obj));

//=================
const cache= new WeakMap();


function cacheUser(user){

    if(!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user);
}

let vasyan = {name: 'Vasyan'};
let alex = { name: 'Alex'};

cacheUser(vasyan);
cacheUser(alex);

alex=null;

console.log(cache.has(vasyan));
console.log(cache.has(alex));