const id = Symbol("213");
console.log(id);

const id2 = Symbol("213");
console.log(id2);

console.log(id === id2); // false different symbols with same description/value
