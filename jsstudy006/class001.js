'use strict';
var x = 23;
if (x === 23)
    console.log(23);
var person = {
    name: 'John',
    age: 30
};
console.log(person.name);
person.age = 31;
person.name = 'John Doe';
console.log(person.age);
console.log(person.name);
var calcAge = function (birthYear) { return 2022 - birthYear; };
console.log(calcAge(1955));
