// Use of map
const users = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Jane',
    age: 25
  },
  {
    name: 'Bob',
    age: 40
  }
];

const names = users.map((user) => user.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']

const ages = users.map((user) => user.age);
console.log(ages); // Output: [30, 25, 40]

const namesAndAges = users.map((user) => ({ name: user.name, age: user.age }));
console.log(namesAndAges); // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }]

const namesAndAges2 = users.map((user) => {
  return {
    name: user.name,
    age: user.age
  };
});
console.log(namesAndAges2); // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }]