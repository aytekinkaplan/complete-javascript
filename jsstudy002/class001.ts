function logger() {
    console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples: number, oranges: number): string {

    return `Juice with ${apples} apples and ${oranges} oranges.`;
}

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(5, 5);

console.log(appleJuice);
console.log(appleOrangeJuice);

function calcAge1(birthYear: number): number {
    return 2090 - birthYear;
}

const calcAge2 = function (birthYear: number, currentYear: number): number {
    return currentYear - birthYear;
}

console.log(calcAge1(1988), calcAge2(1988, 2024));

//Arrow Functions
const calcAge3 = (birthYear: number) => 2099 - birthYear;
const calcAge4 = (birthYear: number, currentYear: number) => currentYear - birthYear;

console.log(calcAge3(1988), calcAge4(1988, 2024));