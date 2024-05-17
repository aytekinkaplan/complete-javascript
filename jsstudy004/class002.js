var jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.birthYear);
    }
};
console.log(jonas.firstName);
jonas.calcAge();
console.log(jonas.lastName);
console.log(jonas.birthYear);
console.log(jonas.job);
jonas.friends.forEach(function (friend) { return console.log(friend); });
