//boolean data type always returns value either 'true' or 'false'
var x = 10>9; // true
y = true;

//boolean as function
Boolean(x); //true
x="Shoaib";
Boolean (x); // returns 'true'

var z;
console.log(z); //undefined
Boolean (z); //false //when undefined (no value assigned), returns 'false'

var z = null; // 'null' 
Boolean (z); //for 'null' ,also returns 'false'

var z=10/"H" ; //NaN 
Boolean (z); //for NaN also returns 'false'


//So for undefined, null and  NaN , boolean returns 'false'