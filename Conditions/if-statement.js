// if syntax: if (condition) { code to be executed* }

// if-else syntax: if (condition) { code to be executed } else { other code }

//else-if syntax: if (1st condition) { code to be executed } else if(2nd condition) { other code } else {some other code}

if (false){
  console.log("if statement executed"); //if (true)
} else{
  console.log("Else statement executed");
}
console.log("End of if statement")

var age = prompt("PLease enter your age");
if (age>=50){
  console.log("Over 50 yo");
}else if(age>=30 && age<50) {
  console.log("Under 50 but above or equal 30 yo")
} // 30 <= age < 50
else if (age<30 && age>=18){
  console.log("Under 30 but above or equal 18 yo")
}else if (age<18 && age>0){
  console.log("Under 18 yo")
}else{
  console.log("Invalid Input")
}