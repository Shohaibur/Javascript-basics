var a; 
a ; //undefined

// value same
a == undefined; //true

// value and type same
a === undefined; //true

a = null;
a; //null;

a==undefined; //true

// null is not same type as undefined
a===undefined; //false

var b="";
b == a; //false
// so,
null == ""; //false

undefined==""; //false

var c ="abc"/10; // NaN
console.log(c); // NaN

NaN==null; //false
NaN==undefined; //false
