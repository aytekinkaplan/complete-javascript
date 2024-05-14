function logger() {
    console.log('My name is Jonas');
}
logger();
function fruitProcessor(apples, oranges) {
    return "Juice with ".concat(apples, " apples and ").concat(oranges, " oranges.");
}
var appleJuice = fruitProcessor(5, 0);
var appleOrangeJuice = fruitProcessor(5, 5);
console.log(appleJuice);
console.log(appleOrangeJuice);
function calcAge1(birthYear) {
    return 2090 - birthYear;
}
var calcAge2 = function (birthYear, currentYear) {
    return currentYear - birthYear;
};
console.log(calcAge1(1988), calcAge2(1988, 2024));
//Arrow Functions
var calcAge3 = function (birthYear) { return 2099 - birthYear; };
var calcAge4 = function (birthYear, currentYear) { return currentYear - birthYear; };
console.log(calcAge3(1988), calcAge4(1988, 2024));
