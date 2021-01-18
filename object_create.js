// !Object.create 

const person = Object.create({
// new prototype object person
calculateAge(){
console.log('Age:',new Date().getFullYear()-this.birthYear)
}

},{
    name:{
        value:'Vasyna',
        enumerable:true,
        writable: true,
        configurable: true             // if true we can delete key 

    },
    birthYear:{
        value: 2000,
        enumerable:false,
        writable: false,
        configurable: false
    },
    age:{
        get(){
            return new Date().getFullYear()-this.birthYear;
        },
        set(value){
            document.body.style.background='red';
            console.log('Set age',value);
        }
    }
});

/*
const person={
    name:'Vasyan'
}
*/
person.name='Max';
for(let key in person){
    if(person.hasOwnProperty(key)){
    console.log('Key', key,person[key]);
    }
}