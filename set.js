// !SET

const set = new Set([1,2,3,3,3,4,5,5,6]);

set.add(10).add(20).add(30).add(20);
/*
console.log(set);
console.log(set.has(30));
console.log(set.size);
console.log(set.delete(1));
console.log(set.size);
set.clear();
console.log(set.size);

*/
//console.log(set.entries())
//for( let key of set){
//    console(key);
//}

function uniqValues(array){
return [...new Set(array)];          // Array.from(new Set(array))
}

console.log(uniqValues([1,1,1,2,3,5,6,6,6,6]));