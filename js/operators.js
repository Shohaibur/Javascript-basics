//Arithmetic Operations
var p=7;
p++ ; //p=p+1
console.log("p =",p)
p--; //p=p-1
console.log("p =",p)
var q = 5;
var r =7;
var s= q++; //5 assigned in s first then q increments 
var t=++r;//t increments first then assign 7
console.log(s);
console.log(t);
console.log(q); //q is 6

//String Operation
var str ="Shoaib"+10+2; //operations from left to right 
console.log(str);
var str1 =10+2+"Shoaib";
console.log(str1);
var str2="Rochi"+"2";
console.log(str2);
//Comparison operator 
//alway returns true or false
4==4; //true
4==6; //false
4=="4" //true; (only consider value)
4==="4"//false; (compares type)
4 != 5 //true ; not equal
4 !=4 //false 
4 !=="4" //true; compares type also
var n=(5>4);
console.log(n); //true
//Logical Operators
//or 
true || true ; //true
false || true; //true
false || false ; //false
//and
true && true ;//true
true && false ; //false
false && false ; // false
//not
!true ; //false
!false ; //true

//Conditional Operator
var a=(1>2) ? "Shoaib":"Rochi"; 
document.write(a); //Rochi ; because false prints 2nd value
//Assignment operator
var a =10;
a+=12; // a= a+12
var b="Shoaib";
b+=" Rochi";
document.write(a);
document.write(b);