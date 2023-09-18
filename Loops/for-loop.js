//for (statement1; statement2; statement3){
 // code to be executed }

 //same task can be done using while , do-while and for loop. It's a matter of situation and efficiency

 //print number 1 to 5
for (var j=1; j<=5;  j++){ //statement1 (j=1) execute only once at initial 
  console.log(j); //statement 2 (j<=) execute than goes to code to be executed //then statement3 executed(j++)
}

//execution summary: 1. Statement1 (once) 2. statement2 3. Code to be executed 3. statement3 and return to statement2
//for loop is less code than while loop

// reverse 5 countdown
for(var j=5; j>=0; j--){
  console.log("countdown "+j);

}