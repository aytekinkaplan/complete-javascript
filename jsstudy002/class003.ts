/*
Create a method named randomNum.
It should take an int max parameter.
This method should return a random number between 0 and max.
Return the random number.
Note: If you need to create a class, you can do so.
Note: The method name should be exactly as requested (randomNum),
otherwise the answer will be incorrect.
*/
function randomNum(max: number): number {
    return Math.floor(Math.random() * (max + 1));
}

console.log(randomNum(10));


/*
This method calculates the number of digits in a given string.
Upon creation, the method takes a string parameter. It then
iterates through each character in the string, checking whether
it is a digit or not. If any character is determined to be a digit,
the digit counter is incremented. As a result, the method returns
the count of digits in the input string.
*/

/*
This method calculates the number of digits in a given string. Upon creation, the method takes a string parameter. It then iterates through each character in the string, checking whether it is a digit or not. If any character is determined to be a digit, the digit counter is incremented. As a result, the method returns the count of digits in the input string.
*/

const countDigits = (str: string | any[]) => {
    let digitCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            digitCount++;
        }
    }

    return digitCount;
};

// Example usage:
const exampleString = "Hello123World456";
console.log(countDigits(exampleString)); // Output: 6
