const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.birthYear);
    }
};

jonas.firstName='Michael';
jonas.lastName='Schmedtmann';
jonas['birthYear']= 1980;
jonas['job']= 'programmer';
jonas['friends']= ['David', 'Steven', 'Sarah'];

console.log(jonas);

jonas.calcAge();

console.log(jonas.lastName);
jonas.friends.forEach(friend => console.log(friend));
