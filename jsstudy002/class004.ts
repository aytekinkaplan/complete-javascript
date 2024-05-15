const calculator = (number1:number, number2:number):string => {
    let result1 = number1 + number2;
    let result2 = number1 - number2;
    let result3 = number1 * number2;
    let result4 = number1 / number2;

    return `Sum of ${number1} and ${number2} is ${result1}. ` +
        `Difference of ${number1} and ${number2} is ${result2}. ` +
        `Product of ${number1} and ${number2} is ${result3}. ` +
        `Quotient of ${number1} and ${number2} is ${result4}.`;
}

console.log(calculator(10, 5));
