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
