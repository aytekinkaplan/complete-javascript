var toyota = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    calcAge: function () {
        return 2024 - this.year;
    }
};
console.log(toyota.calcAge());
toyota.color = 'blue';
console.log(toyota);
var ford = {
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    calcAge: function () {
        return 2024 - this.year;
    }
};
console.log(ford.calcAge());
ford.color = 'red';
console.log(ford);
var nissan = {
    make: 'Nissan',
    model: 'Altima',
    year: 2021,
    color: 'black',
    calcAge: function () {
        return 2024 - this.year; // Return type should be a number
    }
};
console.log(nissan.calcAge());
console.log(nissan);
