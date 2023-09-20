console.log("function-declaration file contents:")

//normal declaration
function myFunction(name ){
  console.log("Hello world! "+name);
}

//function expression
let myFunction2 = function(name2){
  console.log("Hello function expression "+name2);
}


//arrow function
let myFunction3 = (name3) => {
  console.log("This is an arrow function "+name3);
}

myFunction("Shaoib ");
myFunction2("Rochi");
myFunction3("Rahman");
