//callback function
//setTimeout delays the execution of a function

setTimeout(function () {
  document.getElementById("output").innerHTML = "This line prints after 5 seconds";
}, 5000); // 5000=millisecond delay

let persons = [{
  firstname: "Shoaib",
  lastname: "Rahman"
},
{
  firstname: "Fahim",
  lastname: "Shahriar"
}
]

function setperson(person,call){
 setTimeout(function(){
  persons.push(person);
  call();
},2000); //pushes after 2 sec of execution
}

function getperson() {
  setTimeout(function(){
    let output = "";

  for (let i = 0; i < persons.length; i++) {
    output += `<li>${persons[i].firstname} ${persons[i].lastname}</li>`
  };
  document.getElementById("personoutput").innerHTML = output;
  },5000); //after pushing wait for 5 sec so, output shows after 7 second
}
setperson ({firstname : "Saif", lastname : "Ivna" },getperson);
