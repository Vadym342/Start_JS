const myNumber = 42;

/*
localStorage.removeItem('number');

console.log(localStorage.getItem('number'));

localStorage.setItem('number',myNumber);

console.log(localStorage.getItem('number'));

localStorage.clear();
*/

const obj={
    name:'Max',
    age: 20
}

localStorage.setItem('person',JSON.stringify(obj));
const raw = localStorage.getItem('person');
const person=JSON.parse(raw);
raw.name='Vasyan';
//console.log(person);

//!================
// ? test :  localStorage.setItem('temp', Date.now().toString()) , 2 tabs
// window.onstorage=()=>{}
window.addEventListener('storage', event=>{
console.log(event);
})

