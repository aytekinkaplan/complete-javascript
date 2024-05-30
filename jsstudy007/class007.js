// Use of forEach
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
users.forEach(function (user) {
    console.log(user.name, user.age);
});
users.forEach(function (user) {
    console.log(user.name, user.age);
});
users.forEach(function (user) { return console.log(user.name, user.age); });
users.forEach(function (user) {
    console.log(user.name, user.age);
});
