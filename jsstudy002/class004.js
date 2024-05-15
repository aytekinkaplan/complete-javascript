var calculator = function (number1, number2) {
    var result1 = number1 + number2;
    var result2 = number1 - number2;
    var result3 = number1 * number2;
    var result4 = number1 / number2;
    return "Sum of ".concat(number1, " and ").concat(number2, " is ").concat(result1, ". ") +
        "Difference of ".concat(number1, " and ").concat(number2, " is ").concat(result2, ". ") +
        "Product of ".concat(number1, " and ").concat(number2, " is ").concat(result3, ". ") +
        "Quotient of ".concat(number1, " and ").concat(number2, " is ").concat(result4, ".");
};
console.log(calculator(10, 5));
