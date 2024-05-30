const numbers: number[] = [12, 34, 57, 28, 39, 10, 6, 56, -23, -65, -40];

numbers.sort((a, b) => a - b);
numbers.forEach((number) => console.log(number));

console.log('Max number is ' + Math.max(...numbers));