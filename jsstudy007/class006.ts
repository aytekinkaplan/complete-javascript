// Use of filter
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

const filteredUsers = users.filter((user) => user.age >= 30);
console.log(filteredUsers); // Output: [{ name: 'John', age: 30 }, { name: 'Bob', age: 40 }]

const filteredUsers2 = users.filter((user) => user.age >= 30);
console.log(filteredUsers2); // Output: [{ name: 'John', age: 30 }, { name: 'Bob', age: 40 }]

const filteredUsers3 = users.filter((user) => user.age >= 30);
console.log(filteredUsers3); // Output: [{ name: 'John', age: 30 }, { name: 'Bob', age: 40 }]

