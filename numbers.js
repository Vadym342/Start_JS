// !Number 
console.log(_______Number_______);
const num=444;
const float=44.4;
const pow =10e3;
console.log(num);
 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log('2/0',2/0);
console.log(Number.NaN) //Not a number 
console.log(typeof NaN);
const weird=2/undefined;
console.log(Number.isNaN(weird));
console.log(Number.isFinite(Infinity)); // does it have an end?
console.log(Number.isFinite(42));
const stringInt='40';
const stringFloat='40.42';
console.log(Number.parseInt(stringInt)+2);
console.log(Number(stringInt)+2);
console.log(+stringInt+2);

console.log(Number.parseFloat(stringFloat)+2);
console.log(+stringFloat+2);

console.log(0.4+0.2); // 0.6000..
console.log(+(0.4+0.2).toFixed(1)); //0.6
console.log(parseFloat((0.4+0.2).toFixed(1)));//0.6

// !BigInt
console.log(_______BigInt_______);
console.log(typeof 99999999999999999999999n); // ? bigInt only with bigInt 
//console.log(typeof 99999999999999999999999.3333n);// error
//Console.log(10n-4) //error
console.log(parseInt(10n)-4);
console.log(10n-BigInt(4));
console.log(5n/2n); // 2n

// !Math
console.log(_______Math_______);
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-42));
console.log(Math.max(323,32,355,55,3));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.round(4.4));
console.log(Math.trunc(4.9));

// Example
console.log(_______Example_______);
function getRandomBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(getRandomBetween(10,42));    



