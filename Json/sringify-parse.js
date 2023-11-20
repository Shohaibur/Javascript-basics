//JSON.stringify(js_obj) : converts js object to json format
//JSON.parse(json_format_obj) : converts json format to js object

var person_1 = {
  "name" : "Shakib",
  "age" : 24,
  "university" : "Butex"

}

document.write(person_1.name );

console.log(person_1); //{name: 'Shakib', age: 24, university: 'Butex'}
//so json format treat as js object

var person_1_json = JSON.stringify(person_1);
document.write(person_1_json); //{"name":"Shakib","age":24,"university":"Butex"}
// json formatted declared js object can be converted into json format

var person_1_jsobj = JSON.parse(person_1);
console.log(person_1_jsobj); //Uncaught SyntaxError: "[object Object]" is not valid
//so json formatted declared js object cannot be converted into js object 