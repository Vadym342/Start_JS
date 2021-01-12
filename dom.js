// !DOM  Document Object Model

const heading = document.getElementById('hello');
//const heading2=document.getElementsByTagName('h2')[0]
//const heading2 =document.getElementsByClassName('h2-class')[0]
const heading2= document.querySelector('#sub-hello')   // h2 , .h2-class , #sub-hello  // return 1 element(random)

console.dir(heading2);

//const  heading3 = heading2.nextElementSibling;

const h2List = document.querySelectorAll('h2');
console.log(h2List);
const heading3 = h2List[h2List.length-1];


console.dir(heading);

 const link= heading3.querySelector('a');
 link.addEventListener('click',(event)=>{
     event.preventDefault();                              // ?
     console.log('Click',event.target.getAttribute('href'));
     const url=event.target.getAttribute('href');
     window.location=url;
 })
setTimeout(()=>{
    addStylesTo(heading,'JS');
},1500)
setTimeout(()=>{
    addStylesTo(link, 'Pr','blue');                 // TODO : link ... querySelector('a') , children[0]
},3000)
setTimeout(()=>{
    addStylesTo(heading2, ' F','Cyan','2rem');
},4500)


function addStylesTo(node , text,color='red',fontSize){

    node.textContent= text;
    node.style.color=color;
    node.style.textAlign='center';
    node.style.backgroundColor='black';
    node.style.display='block';
    node.style.width='100%';
    // false = '' , undefined, null,0,false 
    if(fontSize)
    {
        node.style.fontSize=fontSize;
    }
}

heading.onclick= () =>{
console.log('Click')
 if(heading.style.color==='red'){
     heading.style.color='Yellow';
     heading.style.backgroundColor='White';
 }
 else{
    heading.style.color='red';
    heading.style.backgroundColor='$#000';
 }
}
heading2.addEventListener('dblclick',()=>{
    if(heading2.style.color==='red'){
        heading2.style.color='Yellow';
        heading2.style.backgroundColor='White';
    }
    else{
        heading2.style.color='red';
        heading2.style.backgroundColor='$#000';
    }
})