var numbers = [12, 34, 57, 28, 39, 10, 6, 56, -23, -65, -40];
var maxNumber = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);
