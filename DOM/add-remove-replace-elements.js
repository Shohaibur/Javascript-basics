console.log("add-remove-replace-elements file contents: ")

//insert item in existing dom
//create element
let olItem = document.createElement('li'); // li tag name
console.log(olItem); // <li></li> 

// add id and class 
olItem.className = "liClass";
olItem.id = "liId";

console.log(olItem); // class and id is added in the li tag 

//Add attribute
olItem.setAttribute ("title","A title for new element");
console.log(olItem); // title="A title for new element"

//add string inside element
olItem.appendChild(document.createTextNode("Javascript")); 
console.log(olItem);

//Important
//Add created element to html view
document.querySelector('ol').appendChild(olItem); // (ol) because i want to add inside ol tag and (olItem) because I want to put (append) olItem
//querySelector because it helps you find specific HTML elements

//now add new item in unordered list
let ulItem = document.createElement("li");
let link = document.createElement('a');
console.log(link) // <a></a>

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute ('href','https://www.instagram.com');
console.log(link) // <a href="link"> Instagram </a>
ulItem.appendChild(link);
console.log(ulItem); // // <li> <a href="link"> Instagram </a> </li>

document.querySelector('ul').appendChild(ulItem); // Instagram added in html view with proper link

//Replacing element
let newHeading = document.createElement('h1');
console.log(newHeading); // <h1></h1>

newHeading.appendChild(document.createTextNode("H1 New Heading"));
console.log(newHeading); // <h1>New Heading</h1>

let oldHeading = document.querySelector('h3');
console.log(oldHeading); //Some Random Contents

let parent = document.querySelector('.container');
console.log(parent); //div.container
// to replace element we need to replace with parent class
parent.replaceChild(newHeading, oldHeading); //replace to new heading value

//remove an element
//2 ways to remove element
//remove an item using .remove()
let listItem=document.querySelectorAll('li') //select all items of li tags
console.log(listItem[0]); //c++
listItem[0].remove(); //c++ will be removed
console.log(listItem[0]); //after removing null or undefined

//remove an item using removeChild() 
//syntax : parentElement.removeChild(childElement)
let list = document.querySelector('ul');
list.removeChild(listItem[9]); //instagram will be removed

//add new class
list.classList.add("test"); //sample-class test will be created inside ul tag
console.log(list);
list.classList.add("test-new"); //classlist.add doesn't override previous but create new 
console.log(list);

//remove a class
list.classList.remove("test-new"); //test-new class will be removed
console.log(list);

//add new attribute inside list
let val =list.hasAttribute("class");
console.log(val); //'true' because these is attribute named class inside list
list.setAttribute("title","new title"); //'new title' named title will be created inside ul
console.log(list)
//remove attribute
list.removeAttribute("title"); //title will be removed
console.log(list)
