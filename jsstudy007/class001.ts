// Use of freeze
const person = { name: 'John', age: 30 };
Object.freeze(person);
person.name = 'Peter';
person.age = 31;
console.log(person);

// Use of seal
const person2 = { name: 'John', age: 30 };
Object.seal(person2);
person2.name = 'Peter';
person2.age = 31;
console.log(person2);

// Use of keys
const person3 = { name: 'John', age: 30 };
const keys = Object.keys(person3);
console.log(keys);

// Use of values
const person4 = { name: 'John', age: 30 };
const values = Object.values(person4);
console.log(values);

// Use of entries
const person5 = { name: 'John', age: 30 };
const entries = Object.entries(person5);
console.log(entries);

// Use of assign
const person6 = { name: 'John', age: 30 };
const person7 = { name: 'Peter', age: 31 };
const person8 = Object.assign({}, person6, person7);
console.log(person8);

// Use of spread
const person9 = { name: 'John', age: 30 };
const person10 = { name: 'Peter', age: 31 };
const person11 = { name: 'George', age: 32 };
const person12 = { ...person9, ...person10, ...person11 };
console.log(person12);

// Use of merge
const person13 = { name: 'John', age: 30 };
const person14 = { name: 'Peter', age: 31 };
const person15 = { ...person13, ...person14 };
console.log(person15);
