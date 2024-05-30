const user = {
  name: 'John',
  age: 30,
  skills: ['JavaScript', 'HTML', 'CSS']
};
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

console.log(Object.entries(user));

Object.keys(user).forEach(function(key) {
  console.log(key, user[key]);
});

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));

console.log(Object.entries(user).map(([key, value]) => ({ key, value })));
