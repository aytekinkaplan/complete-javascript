// Use of filter
var users = [
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
var filteredUsers = users.filter(function (user) { return user.age >= 30; });
console.log(filteredUsers); // Output: [{ name: 'John', age: 30 }, { name: 'Bob', age: 40 }]
var filteredUsers2 = users.filter(function (user) { return user.age >= 30; });
console.log(filteredUsers2); // Output: [{ name: 'John', age: 30 }, { name: 'Bob', age: 40 }]
var filteredUsers3 = users.filter(function (user) { return user.age >= 30; });
console.log(filteredUsers3); // Output: [{ name: 'John', age: 30 }, { name: 'Bob', age: 40 }]
