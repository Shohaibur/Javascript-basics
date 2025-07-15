const id = Symbol("213");
console.log(id);

const id2 = Symbol("213");
console.log(id2);

console.log(id === id2); // false different symbols with same description/value

const isLoggedIn = false
const outsideTemp = null
let userEmail;
console.log(isLoggedIn); // false
console.log(outsideTemp); // null
console.log(userEmail); // undefined

//Array - Object - Function
const cars = ["bmw", "audi", "mercedes"];
console.log(cars); // ["bmw", "audi", "mercedes"]

//
const person = {
  name: "John",
  age: 30
};
console.log(person); // { name: "John", age: 30 }

//
const greetings = function greet() {
  console.log("Hello, World!");
}
console.log(greetings); // [Function: greet]

//Types
console.log(typeof cars); // object
console.log(typeof person); // object
console.log(typeof greetings); // function