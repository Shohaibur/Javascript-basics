console.log("Classes file contents:");

//classes are templates/blueprint for creating objects
let person1={
  firstname:"Shoaib ",
  lastname:"Rahman",
  department:"CSE ",
  fullname : function(){
    console.log(`${this.firstname} ${this.lastname}`);

  }
}
let person2={
  firstname : "Shakib",
  lastname : "Ahmed",
  department : "BBA",
  fullname : function (){
    console.log(`${this.firstname} ${this.lastname}`);
  }
    
}
console.log(person1);
console.log(person2);



console.log("Work with classes:")
//class
class Person{
  constructor (fname, lname, dep){
    this.firstname = fname;
    this.lastname = lname;
    this.department = dep;
  }
   fullname(){  //method
    console.log(this.firstname, this.lastname);
  }
}


let p2 = new Person ("Maruf","Siddique","English");
let p3 = new Person ("Shakib","Ahmed","BBA");
let p4 = new Person ("Abrar", "Asif","CSE");

console.log(p2);
p2.fullname();
console.log(p3);
p3.fullname();
console.log(p4);
p4.fullname();