const firstName: string = "Jonas";
const job: string = "teacher";
const birthYear: number = 1991;
const year: number = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\nmultiple \nlines");

console.log(`String with
multiple
lines`);

