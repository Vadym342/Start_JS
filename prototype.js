// !Prototype
const person ={
    name:'Max',
    age: 22,
    greet: function(){
        console.log('Greet!');
    }
}

const person1 = new Object({
    name:'Max',
    age: 22,
    greet: function(){
        console.log('Greet!');
    }

})

Object.prototype.sayhello= function(){
    console.log('Hello');
}

const vasyan = Object.create(person);
vasyan.name='vasyan';

const str= new String('i am string');
