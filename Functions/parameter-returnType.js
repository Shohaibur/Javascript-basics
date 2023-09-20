console.log("parameter-returnType file contents:");

function printSomething(){
  alert("Hello world!");

}

//once function is called, the body inside function will be executed
printSomething("Shoaib"); //the string inside function will not print instead function is called and body is alerted


//using parameter 
function saysomething2(param1){
  alert("Hello "+param1);

}
saysomething2("Rahman"); //value will be passed into parameter(param1) and execute with parameter value
// "Hello Rahman"

//good way to use parameter in function
function saySomething3(fname,lname){
  console.log(`Hello ${fname} ${lname}`)
}

let fname="Shoaib";
let lname= "Rahman";

saySomething3(fname,lname); // only when value is passed, Hello Shoaib Rahman

//default value 
//parameter override
function saySomething4(namef="Shakib",namel="Ahmed"){ //inside function default value is declared
  console.log(`Hello ${namef} ${namel}`)
}

let namef="Shoaib";
let namel= "Rahman";

saySomething4(); //if no parameter is passed , will be execute with default value
saySomething4(namef,namel); // when variable is passed defalut value is overwritten // Shoaib Rahman

//return
function addNum( a=0, b=0){
  console.log(b);
  return a+b; // return will exit the code
  console.log(a); //this line will not be executed because return is already used

}
let sum = addNum(3,5);
console.log(sum);