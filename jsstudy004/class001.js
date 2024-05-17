var jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];
console.log(jonasArray);
var jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas);
var jonas2 = {
    firstName: jonasArray[0],
    lastName: jonasArray[1],
    age: jonasArray[2],
    job: jonasArray[3],
    friends: jonasArray[4],
    // @ts-ignore
};
console.log(jonas2);
