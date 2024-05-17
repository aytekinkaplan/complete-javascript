type Car = {
    make: string;
    model: string;
    year: number;
    color?: string;
    calcAge: () => number;
}

const toyota: Car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    calcAge: function () {
        return 2024 - this.year;
    }
}

console.log(toyota.calcAge());

toyota.color = 'blue';

console.log(toyota);

const ford: Car = {
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    calcAge: function () {
        return 2024 - this.year;
    }
}

console.log(ford.calcAge());

ford.color = 'red';

console.log(ford);

const nissan: Car = {
    make: 'Nissan',
    model: 'Altima',
    year: 2021,
    color: 'black',
    calcAge: function () {
        return 2024 - this.year; // Return type should be a number
    }
}

console.log(nissan.calcAge());

console.log(nissan);
