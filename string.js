// ! Strings
console.log(_______Strings_______);
const name='Vasyan';
const age=22;
function getAge()
{
    return age;
}

const output='Hi, my name '+ name + ' and my age '+ age+ ' old.';
console.log(output);

const output1=`Hi, my name ${name} and my age  ${age<20?'A' :'B'} old.`;

const output2=`
<div>divv</div>
<p>p</p>
`;
const firstName='Vasyan';
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(2));
console.log(firstName.indexOf('!'));
console.log(firstName.startsWith('vas'));
console.log(firstName.repeat(3));
const string ='   fdffdffffff         '; 
console.log(string.trim());
console.log(string.trimLeft());
console.log(string.trimRight());
// TODO  New syntax 
function logPerson(s,name,age)
{
    console.log(s,name,age);
    if(age<0)
    {
        age='Not born';
    }
return `${s[0]} ${name}${s[1]}${age}${s[2]}`;
}

const personName='Vasyan';
const personAge=23;
const personName1='Max';
const personAge1=-10;
const output3=logPerson`Name: ${personName}, Age ${personAge}!`;
const output4=logPerson`Name: ${personName1}, Age ${personAge1}!`;
console.log(output3);
console.log(output4);