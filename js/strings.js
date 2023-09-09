//both '' and "" used to declare strings but has some differences
"The book name is \"The Alchemist\"" //The book name is "The Alchemist"
'The book name is \"The Alchemist\"' //same 
'The book name is \'The Alchemist\'' //same
var x="This is how to print single backslash \\";
console.log(x); //This is how to print backslash \
//tab space
y="This is tab space in \t between"
console.log(y) //This is tab space in 	 between
//new line
z="this is \n new line";
console.log(z); 
//this is 
// new line

//Concatenation
var c= x+y;
console.log(c) //This is how to print single backslash \This is tab space in 	 between

//length
c.length //length is a property

//String indexing
var x="Shoaib"; 
x[0]; // 'S' //indexing starts with 0
x[3]; // 'a'
x[7]; // undefined

//Methods of string
//Upper-lower-case
x.toLocaleUpperCase(); // SHOAIB
console.log(x); //Shoaib // value will not be changed
z=x.toLocaleUpperCase(); // SHOAIB // Value can be stored

//for .toLowerCase same as .toUpperCase

//Trim method
x=" Shaoib  Rochi   " //' Shaoib   Rochi  '
x.trim() // 'Shaoib   Rochi' //removes unnecessary spaces
//Again this method only giving a result , we need to store it for using it
z=x.trim(); // 'Shaoib   Rochi'

//Slice method
x="Shoaib";
x.slice(1, 3) // ho // cut from index 1 to 3 //1 & 3 are parameters