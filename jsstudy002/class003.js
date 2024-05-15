/*
Create a method named randomNum.
It should take an int max parameter.
This method should return a random number between 0 and max.
Return the random number.
Note: If you need to create a class, you can do so.
Note: The method name should be exactly as requested (randomNum),
otherwise the answer will be incorrect.
*/
function randomNum(max) {
    return Math.floor(Math.random() * (max + 1));
}
console.log(randomNum(10));
