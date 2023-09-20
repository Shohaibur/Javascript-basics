console.log("math-date-object file contents:")

//math object
let val;

val = Math.PI;
val = Math.E;
val = Math.round(23.5);
val = Math.ceil(3.2);
val = Math.floor(3.9);
val = Math.sqrt(81);
val = Math.abs(-56);
val = Math.pow(2, 8); //2 power of 8
val = Math.min(2,3,1,0,-8); // minimum number
val = Math.max(-1,2,4,5);
val = Math.floor(Math.random()*100); //random integer number

console.log(val)

//date-time object
let birthday= new Date('05-09-1999 11:25:55'); //defined date
console.log(birthday.getMonth());  // 4 because indexing jan=0, may=4


let today= new Date(); // new = instance //present date

val = today.getDate();
val = today.getDay(); //day of week starting sunday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // timestamp -> amount of time past since Jan 1st 1970

console.log(val); 

birthday.setMonth(0); //month changed to January
console.log(birthday); 










