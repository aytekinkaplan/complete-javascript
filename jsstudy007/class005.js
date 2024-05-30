// Use of map
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
var names = users.map(function (user) { return user.name; });
console.log(names); // Output: ['John', 'Jane', 'Bob']
var ages = users.map(function (user) { return user.age; });
console.log(ages); // Output: [30, 25, 40]
var namesAndAges = users.map(function (user) { return ({ name: user.name, age: user.age }); });
console.log(namesAndAges); // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }]
var namesAndAges2 = users.map(function (user) {
    return {
        name: user.name,
        age: user.age
    };
});
console.log(namesAndAges2); // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }]
