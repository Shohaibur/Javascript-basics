console.log("domSelectorSingle file contents:");
//select and access one or more HTML elements from an HTML doc\

//technique 1 : getElementById
//getting an element
//work with single element
let val;
val = document.getElementById('document-title'); //<h3 id="document-title">Some Random Contents</h3>
val = document.getElementById('document-title').id;  //document-title
val = document.getElementById('document-title').className; //class-title


console.log(val); 

//changing style
document.getElementById('document-title').style.background = '#0000FF';
document.getElementById('document-title').style.color = '#FFFF00';
document.getElementById('document-title').style.padding = '25px';
document.getElementById('document-title').style.display = 'none'; //hides the element
document.getElementById('document-title').style.display = 'block'; //show the element

//changing contents title
document.getElementById('document-title').textContent = 'Changed title'; //Changed title
document.getElementById('document-title').innerText = "Again changed title"; //Again changed title
document.getElementById('document-title').innerHTML = "<i>Italic title </i>"; //html change
//easy way
let title1 = document.getElementById('document-title');
title1.innerText = "Easy way"; 


//technique 2 : document.querySelector() 
//work with single element
//tag name, class, ID, attributes, and more
title1 = document.querySelector('#document-title'); // # = id
title1 = document.querySelector('.class-title'); // . = class
title1 = document.querySelector('ol'); //print ordered list
title1 = document.querySelector('li'); //print first li item 'C++'
title1 = document.querySelector('ul li'); //first li under first ul parent //google
title1 = document.querySelector('ol li'); 
title1.style.background = 'red';
title1.style.color = 'yellow'; //text color = yellow

// access any child of any list
title1 = document.querySelector('ul li:last-child');  //Twitter
title1 = document.querySelector('ol li:last-child');  //php
title1 = document.querySelector('ol li:nth-child(1)'); //C++
title1 = document.querySelector('ol li:nth-child(3)'); //Python
title1 = document.querySelector('ul li:nth-child(3)'); //LinkedIn

title2 = document.querySelector('ul li:nth-child(even)'); // first even child


document.querySelector('ul li:nth-child(2)').innerText= 'WhatsApp'; // 2nd child of li under ul changed to WHatsApp
document.querySelector('ul li:nth-child(3)').innerText= 'Indeed'; 



console.log(title1);
console.log(title2); //whatsapp