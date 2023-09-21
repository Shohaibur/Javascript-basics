console.log("Sub Class file contents:");

class Person {
  constructor(fname, lname) {
    this.firstname = fname;  //this.firstname is a property
    this.lastname = lname;

  }
  greeting() {
    return `Hello ${this.firstname} ${this.lastname}`;
  }
}

class Customer extends Person {
  constructor(fname, lname, phone, membership) {
    super(fname, lname);  // super keyword to call constructor from super class
    this.contact = phone;
    this.membership = membership;
  }
  fullname(fname,lname){
    return `${this.firstname} ${this.lastname}`;

  }
}

let person1 = new Person("Siyam", "Mahbub");

console.log(person1);
console.log(person1.greeting());

let cus1 = new Customer("Nasif", "Ahmed", "0123456", "123");

console.log(cus1);
console.log(cus1.greeting());
console.log(cus1.fullname());

console.log(person1.fullname()); //error because fullname is not a function of super class