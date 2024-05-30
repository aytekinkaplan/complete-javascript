// Use of forEach
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

users.forEach(function(user) {
  console.log(user.name, user.age);
});

users.forEach((user) => {
  console.log(user.name, user.age);
});

users.forEach((user) => console.log(user.name, user.age));

users.forEach((user) => {
  console.log(user.name, user.age);
});