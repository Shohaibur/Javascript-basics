console.log("while-loop fle contents:")
// while (condition){
  //Code to be executed }

// while(true){ 
//   console.log("Hello World")
// } //this falls into infinity loops printing Hello world if true is a value, it goes infinity loops too but if 'false' or 0 nothing happens

var i= 1;

while(i<= 5){
  console.log("Value of i is: "+i)
  i++; //increment value of i by 1 and goes back to while loop to check condition
}
console.log(i); //6 //when value of i doesn't match with condition , while loop breaks 

// do while
var i=1;

do { 
  console.log("The value of i is "+i);
    i++;
} while(i<=5);