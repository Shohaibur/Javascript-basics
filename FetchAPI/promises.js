//relevant with frameworks
//promise call a function which parameters are resolve and reject
//.then executes after revolve promise

let persons = [{
  firstname: "Shoaib",
  lastname: "Rahman"
},
{
  firstname: "Fahim",
  lastname: "Shahriar"
}
]
function setperson (person){
  let prom = new Promise(function(resolve,reject){
    persons.push(person);
    //resolve();
    let error = true; // if true values will be printed
    if (!error) {
      resolve();
    }
    else {
      reject ("Error error error"); //error message
    }

  });
  return prom;
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
setperson ({firstname : "Saif", lastname : "Ivna" })
.then(getperson)
.catch(function (e){ //error message passed to catch block and catched by (e)
  document.write (e);
});
