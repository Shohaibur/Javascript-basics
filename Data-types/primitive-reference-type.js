// primitive type deals with value
// different address 
var a=7;
var b=a;
a=45; // a value changed not b
console.log(b); // 7

// Reference type deals with address
// same address
let numbers =[1,2,3]
let newNumbers=numbers;
console.log(newNumbers); //[1,2,3]
numbers[1]=500;
console.log(numbers); //[1,500,3]
console.log(newNumbers); // [1,500,3]


// primitive = {STRING, NUMBER, BOOLEAN, SYMBOL, UNDEFINED, NULL}
// non-primitive = {ARRAY, OBJECT, FUNCTION}
