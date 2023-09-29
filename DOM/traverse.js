console.log("Dom traverse file contents: ")

let val;

let list = document.querySelector('ul');
let listitem = document.querySelector('ul li');

val = list;
val = listitem; // print first li item of ul

//get the child nodes
val =  list;
val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[1].nodeName; // LI because list
val = list.childNodes[0].nodeType; //3 because text type

//Node Types 
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

val = list.children; //retrieve collection of children element such as li
val = list.children[0].textContent = "Hello"; // first li changed to Hello
val = list.children[1].children[0]; // a //access children inside children
val = list.children[1].children[0].href; //https://www.facebook.com/
val = list.firstChild; // text because enter
val = list.firstElementChild; //hello
val = list.lastElementChild; //twitter
val = list.childElementCount; //4


val = listitem; 
val = listitem.parentElement; //ul
val = listitem.parentElement.parentElement; //div 
val = listitem.nextElementSibling; //facebook
val = listitem.nextElementSibling.nextElementSibling; //linkedin
val = val.previousElementSibling; //facebook




console.log(val); 