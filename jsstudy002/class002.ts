const calcAge = (currentYear: number, birthYear: number) => currentYear - birthYear;

console.log(calcAge(2024, 2016));

const sayMyName = (firstName: string) => `My name is ${firstName}`;
console.log(sayMyName("Ahmed Yusuf"));

const mySelf = (firstName: string, lastName: string, birthYear: number, currentYear: number, favoriteColor: string, favoriteFood: string, favoriteComputerGame: string): string => {
    return `My name is ${firstName} ${lastName}. I am ${currentYear - birthYear} years old. My favorite color is ${favoriteColor},and also my favorite food is ${favoriteFood} and my favorite computer game is ${favoriteComputerGame}!`;
}

console.log(mySelf("Ahmed Yusuf", "Kaplan", 2016, 2024, "Red", "Nodle", "Brawl Stars"));