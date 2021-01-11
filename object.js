//!Objects

const person ={
    firstName:'Vasya',
    lastName:'Vasyan',
    age:2001,
    languages: ['En','Ua'],
    hasWife: false,
    'complex key':'Complex Value',
    ['key_'+(1+3)]:'',                     //key_4
    greet(){
        console.log('greet from person')
    },
    info(){
        console.info('Info about person (Name):', this.firstName);
    }
}

console.log(person.firstName);
console.log(person['age']);
console.log(person['complex key']);
person.greet();

person.age++;
person.languages.push('De');


//person['key_4']=undefined;
delete person['key_4'];

console.log(person);

//const name=person.firstName;
//const age= person.age;
//const languages= person.languages;

const {firstName,age: personAge=10,languages}= person;

console.log(firstName, personAge, languages);

for(let key in person)
{
    if(person.hasOwnProperty(key)) {   // ? Important
    console.log('key:',key);   
    console.log('value:',person[key]); 
    }
}

 Object.keys(person).forEach((key)=>{           // ? Object.keys don't touch prototype 
    console.log('key:',key);   
    console.log('value:',person[key]); 
})

// !Context
//person.info();
console.log('_______________________');
const logger={
    keys(){
           console.log('Objects keys:',Object.keys(this));
    },

   /* keysAndValues() {
      Object.keys(this).forEach(key=>{                    // ? => don't have context 
         console.log(`"${key}": ${this[key]}`);
    })*/
    //const self=this
    keysAndValues() {
        Object.keys(this).forEach(function(key){            // ? fucntion have context
           console.log(`"${key}": ${this[key]}`);
      }.bind(this))
    },
    withParams(tob=false,between=false,bottom=false){
        if(top){
            console.log('------------- Start -----------');
        }
        Object.keys(this).forEach((key,index,array)=>{                     // ? forEach(context, index ,array)    
         console.log(`"${key}": ${this[key]}`);
        if(between && index !=array.length-1){
            console.log('-----------------------');
        }
        if(bottom){
            console.log('------------- End -----------');
        }
    })
    }
}

//const bound=logger.keys.bind(person);  // ?should show

//logger.keys.call(person); // ?auto showing
logger.keysAndValues.call(person);

logger.withParams.call(person,true,true,true); // ? infinity params


logger.withParams.apply(person, [true,true,true]);       // ? 2 params, second param = array 


