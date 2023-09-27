console.log("domSelectorMultiple file contents : ");
//Multi selector
// document.getElementByClassName()
let list = document.getElementsByClassName('sample-class');
list[0].style.background = 'red';
list[0].style.color = 'yellow';
list[0].style.padding = '10px';
list[0].textContent = 'Hello World!';
console.log(list[0]); //access first index with sample-class class

//document.getElementByTagName()
list = document.getElementsByTagName('li');
console.log(list[0]);  //access 1st element 'C++' using indexing



list= document.querySelector('ol').getElementsByTagName('li'); //list of li tags under ol
console.log(list); 

let lis = Array.from(list); //convert into array and print 
lis.forEach(function(items){
  console.log(items);
})

//documentQuerySelectorAll
// id -> #
// className -> .
//tagname -> nothing
list = document.querySelectorAll('.sample-class'); //all classes (node list)
list = document.querySelectorAll('ol li'); //li tags under ol
list.forEach(function(liitems){
  console.log(liitems);
});
console.log(list);

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEve = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function(item){
  item.style.background = 'grey';
  item.style.color = 'white';
});

liEve.forEach(function(item){
  item.style.background = 'red';
  item.style.color = 'white';
});


console.log(list); 