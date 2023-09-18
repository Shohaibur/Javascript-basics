console.log("break-continue file contents:")
//break helps exiting a code block {this is a code block}
//so break is used in code blocks {}

for (var i=1; i<=5; i++){
  console.log(i);
  break; // output 1 because break statement
}

console.log("break loop when 4")
for (var i=1;i<=5;i++){
  console.log(i);
  if(i==4){
    break;
  }
}

//continue skips operation momentarily
console.log("skip when value is 4")
for(var i=1;i<=5;i++){
  if (i==4){
    continue;
  }
  console.log(i);
}

console.log("Only print even numbers from 0 to 10");
for(var i=1; i<=10; i++){
  if(i % 2==1){ //when remainder 1
    continue;
  }
  console.log(i);
}

console.log("Print the numbers from 0 to 31 which are divisible by 5 ")
for(var i=1; i<=31; i++){
  if(i%5 !==0){
    continue;
  }
  console.log(i);
}

