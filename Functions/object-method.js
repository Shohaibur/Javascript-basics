console.log("object-method file contents:")

let person = { //object
  firstname: "Shakib", 
  lastname: "Ahmed",  //firstname, lastname are property
  Age: 23,
  fullname: function () { //method 
    return `${this.firstname} ${this.lastname}`; //this. because property of same object
  }
}
console.log(person.firstname);
console.log(person.fullname());
