var calcAge = function (currentYear, birthYear) { return currentYear - birthYear; };
console.log(calcAge(2024, 2016));
var sayMyName = function (firstName) { return "My name is ".concat(firstName); };
console.log(sayMyName("Michael"));
var mySelf = function (firstName, lastName, birthYear, currentYear, favoriteColor, favoriteFood, favoriteComputerGame) {
    return "My name is ".concat(firstName, " ").concat(lastName, ". I am ").concat(currentYear - birthYear, " years old. My favorite color is ").concat(favoriteColor, ",and also my favorite food is ").concat(favoriteFood, " and my favorite computer game is ").concat(favoriteComputerGame, "!");
};
console.log(mySelf("Michael", "Callaway", 2016, 2024, "Red", "Nodle", "Brawl Stars"));
