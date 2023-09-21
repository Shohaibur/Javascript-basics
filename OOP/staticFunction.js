console.log("Static function file contents:");

class Person {
  constructor(fname, lname) {
      this.firstname = fname;
      this.lastname = lname;
  }

  greeting() {
      console.log(`Hello ${this.firstname} ${this.lastname}!`);
  }

  static test(){
    console.log("This is a static function");
  }
}

let person1 = new Person ("Shoaib", "Rahman");

console.log(person1);
console.log(person1.greeting());
console.log(Person.test()); //static function only be called from Super class not from object