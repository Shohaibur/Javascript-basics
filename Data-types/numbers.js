// 5 Data types in js  (numbers, strings, booleans, arrays, objects)
//numbers
12e3; //12000
25+10+"10"; //3510
"the result"+10+10; //the result1010
"5"*5; //25

//(Exceptional-concates only when addition)
"25"+"5"; //255 
"45"+5; //455

"25"-"5"; //20 //doesn't concates when sub,product,div,remainder etc

25/0; //infinity <- can be stored in variable 

var a=0xBB; //Hexadecimal (represent with 0x)
console.log(a); //187

//convert number to string (method)
a.toString(); // "187" 
var a =187;
var b=a.toString(2); //"10111011" (Converts to binary because (2))
var c=a.toString(8); //"273" (converts to octal because (8))
var d=a.toString(16); //"bb" (Converts to hexadecimal because (16))

//Precision
var x=3.1416;
var y=x.toPrecision(2); //"3.1" (also converts to string)
var z=x.toPrecision(3); //"3.14"

//Parse int-float (string to number)
var p="1.256";
var q=parseInt(p);//1
var r=parseFloat(p);//1.256

//isNaN function returns true false
var x ="sdfsd";
isNaN(x); //returns true because not a number
var y=478;
isNaN(y); //false
var y="664";
isNaN(y); //false 
var z="135dfs";
isNaN(z); //true (Characters mixed)
<main>
  
</main>