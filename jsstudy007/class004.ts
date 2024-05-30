const users: { name: string, age: number }[] = [
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

users.forEach((user) => {
  console.log(user.name, user.age);
});