// Json = Javascript object notation
// Data format for exchanging Data between systems running on different technology

// Object declare
var student = {
  name : "Jhon",
  age : 26,
  hometown : "Dhaka"
}

//Student object in Json format
var student_json = {
  "name" : "Jhon",
  "age" : 26,
  "hometown" : "Dhaka"
}

// JSON.stringify(object_name) : function converts object to Json format
var student_json_usingfunc = JSON.stringify(student);

document.write(student_json_usingfunc);

// JSON.parse(jsonObj_name) : function converts Json object to Javascript object
var student_jsobj_usingfunc = JSON.parse(student_json_usingfunc);
document.write(student_jsobj_usingfunc);
