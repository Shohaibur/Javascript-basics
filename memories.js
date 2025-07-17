// There are 2 types of Memories in Javascript : Stack and Heap
// Stack Memory: Used for primitive data types
// Heap Memory: Used for non-primitive data types

let name = "John"; // Stack Memory
let varname = name; // Stack Memory

let anotherName = "albert"; // Stack Memory

console.log(varname); // John
console.log(anotherName); // albert

//Value shows from Stack Memory are a copy of the original value
// Changing varname will not affect name

//value shows from heap memory are references to the original value
//changing the original value will affect the reference