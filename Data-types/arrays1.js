// array is collection of items
var countries = ["BD", "India", "Nepal"];
console.log(countries); // (3) ['BD', 'India', 'Nepal']

//array indexing
countries[0]; // 'BD'

//array length
countries.length; // 3

//change item in array
countries[1]="USA";
console.log(countries); // (3) ['BD', 'USA', 'Nepal']  //So string in array is mutable

//inserting in string
countries[3]="Norway";
console.log(countries); // ['BD', 'USA', 'Nepal', 'Norway']

//What if indexing become wrong
countries[6]="Sweden";
console.log(countries); // ['BD', 'USA', 'Nepal', 'Norway', empty × 2, 'Sweden'] 

//In this case best practice is 
countries[countries.length]="Sweden"; //because indexing = length-1 (here length is 4,sweden is put in 4th index)
console.log(countries); // ['BD', 'USA', 'Nepal', 'Norway','Sweden'] 

//Push - Pop
colors=["red","blue","yellow","green"];
colors.push("pink"); // 5 //push always returns length of array after pushing
// push can be used for more than one item storing in array
console.log(colors); //["red","blue","yellow","green","pink"]

colors.pop(); // 'pink' // iteratively removes the last item of array and returns it as output
console.log(colors); //["red","blue","yellow","green"]
colors.pop(); // 'green'
console.log(colors); //["red","blue","yellow"]
colors.pop(); // 'yellow'
console.log(colors); //["red","blue"]

//Shift - Unshift
console.log(colors); //["red","blue"]
colors.shift(); //'red'
console.log(colors); //["blue"]  // shift removes 1st item 
colors.unshift("White"); // 2  // unshift adds from beginning
console.log(colors); // ['White', 'blue']