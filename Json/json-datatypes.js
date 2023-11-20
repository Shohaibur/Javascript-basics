// jsonlint.com
// Json Data types
// object,string,number,null,boolean,array

var person = {
  name : "Newaz",
  age : 25,
  hometown : "Dhaka",
  married : false,
  dob : 1998-05-09, 
  hobbies : ["Books","Travel"],
  test_null : null,
  test_undefined : undefined,
  greet : function(){
    document.write(`Greetings ${this.name}! <br>`)
  }
}
person.greet();

// Js object to Json
var person_json = JSON.stringify(person);
document.write(person_json); //{"name":"Newaz","age":25,"hometown":"Dhaka","married":false,"dob":1984,"hobbies":["Books","Travel"],"test_null":null}
// so date,undefined and functions cannot be converted into Json format