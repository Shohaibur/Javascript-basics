console.log("hello, world!")
console.log(23+97);
//Variables
let a=10;
console.log(a);
9*a
let b=7*a;
console.log(b)
//Constant values can't be overwritten
const max=57;
const actual =max-13;
const percentage=actual/max;
console.log(percentage)

//Javascript String
const string = "The revolution will not be televised.";
console.log(string);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//Quotes
const quote =`He said, "My name's Dwight"`;
console.log(quote)

//Javascript Concatenation
const name = "Chris";
const greeting = `Hello, ${name}`; 
console.log(greeting); // "Hello, Chris"

const firstname ="Shoaib ";
const lastname = "Rochi";
console.log(`${firstname}${lastname}`) //display way1
console.log(firstname+lastname) //display way2

//JS Outputs (4 ways to show js output)
alert("This string used alert to display");
document.getElementById("newid").innerHTML="This string is displayed using innerHtml";
document.write("This string is displayed using document.write ");
console.log("This string is displayed using console log which prints in browser's console");

//User Input
const x=prompt("User Input using prompt");
document.write(x);

