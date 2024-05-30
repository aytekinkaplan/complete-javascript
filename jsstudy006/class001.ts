'use strict';

const x: number = 23;

if (x === 23) console.log(23);

const person: { name: string; age: number } = {
  name: 'John',
  age: 30
};
console.log(person.name);
person.age = 31;
person.name = 'John Doe';

console.log(person.age);
console.log(person.name);

const calcAge = (birthYear: number): number => 2022 - birthYear;
console.log(calcAge(1955));
