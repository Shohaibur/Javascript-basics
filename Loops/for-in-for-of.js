console.log("for-in for-of file contents:")
//for-in work on string, array and object
//for-of work on string and array

let fname = "Shohaibur";
let color = ["red", "yellow", "green"];
let person = {  //object
  name: "Sakib Ahmed",
  profession: "Student",
  varsity: "BSMSTU",
  age: 24,
}

//for in/of syntax: for(var x in operationVariable){}
//for in get index and values
//for of get direct value

//string
for (var x in fname) {
  console.log(`index no:${x} and index value : ${fname[x]}`);
}

for (var x of fname) {
  console.log(`value:${x} `);
}

//array
console.log("For in color array:")
for (var y in color) {
  console.log(`index no: ${y} and value:${color[y]}`)
}

console.log("For of color array:")
for(var z of color){
  console.log(`value: ${z}`)
}

//object
console.log("For in person object:")
//no indexing in object rather property
for(var x in person){
  console.log(`object property: ${x} and property value : ${person[x]}`); 
}

//this will not work because for of cannot iterate object
console.log("For of person object:")
for(var x of person){
  console.log(`property value: ${person[x]}`); 
}
