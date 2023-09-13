var names=[]; //empty array
names.push(45);
console.log(names) ; //[45]
names.push("shoaib")
console.log(names); // [45,shoaib]

// split - slice
// split("") converts string to array 
var person ="Shoaib";
var y=person.split("");
console.log(y) // ['S', 'h', 'o', 'a', 'i', 'b']

// split() converts string to single array
var z=person.split();
console.log(z) //['Shoaib']

// Split the string 
var a="Rochi";
var b=a.split(""); // specific splitting only work with split("")
console.log(b); // ['R', 'o', 'c', 'h', 'i']

var b=a.split("o"); // split on basis of 'o'
console.log(b); //['R', 'chi']
//example
var country="Bangladesh is a country";
var c=country.split("n"); //split on basis of 'n'
console.log(c); //['Ba', 'gladesh is a cou', 'try']

var d=country.split(" "); //each word is a array in sentence
console.log(d); // ['Bangladesh', 'is', 'a', 'country']

//converts to string
var r=d.toString(); 
console.log(r); // 'Bangladesh,is,a,country'
//but we don't want any ',' so,

//join() method
var t=d.join("/");
console.log(t); //Bangladesh/is/a/country

var t=d.join(" ");
console.log(t); // Bangladesh is a country

// concat array
var namea=["Shoaib"];
var nameb=["Fahim"];
var fname=namea.concat(nameb);
console.log(fname); //  ['Shoaib', 'Fahim']

// sort array
fname.sort(); // ['Fahim', 'Shoaib']
console.log(fname); // ['Fahim', 'Shoaib']

//reverse array
fname.reverse(); //['Shoaib', 'Fahim']
console.log(fname); //['Shoaib', 'Fahim']