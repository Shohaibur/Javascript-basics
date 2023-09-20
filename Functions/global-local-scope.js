console.log("GLobal local scope file content:")

// var is re declarable and re assignable
// let is not re declarable but re assignable
// const is not re declarable and re assignable

//scoping

var a = 1;
let b = 2;
const c = 3; //global scope
var d = 4;
console.log(`Global Scope: `, a, b, c);

function test() {
  var a = 4;
  let b = 5; //no error because local scope (function)
  const c = 6;
  console.log('Function scope: ', a, b, c, d); // d is accessible : global 
}
test();
console.log('Function scope: ', a, b, c, d); // 1, 2, 3 because globally assigned
//Note: locally set value is not accessible globally

if (true) {
  var a = 10;
  let b = 11;
  const c = 12;
console.log(a,b,c);
}
console.log(a,b,c); // for 'if','for', only var value will be changed // 10 2 3