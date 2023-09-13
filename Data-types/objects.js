//empty object
var employee ={};

// declare object
var employee = {eName:"Abc", eId:1, eAddress:"Dhaka"};
console.log(employee); //{eName: 'Abc', eId: 1, eAddress: 'Dhaka'}

//access certain property from object way 1
employee["eName"]; //'Abc'
employee["eId"]; // 1
employee["eAddress"]; //'Dhaka'

//access properties way 2
employee.eAddress; //'Dhaka'

//set new property way 1
employee["eSalary"]=35000;
console.log(employee); //{eName: 'Abc', eId: 1, eAddress: 'Dhaka', eSalary: 35000}

//set new property way 2
employee.age=25;
console.log(employee); //{eName: 'Abc', eId: 1, eAddress: 'Dhaka', eSalary: 35000, age: 25}

// delete property
delete employee.age; //'true' as output
console.log(employee); // eName: 'Abc', eId: 1, eAddress: 'Dhaka', eSalary: 35000}

