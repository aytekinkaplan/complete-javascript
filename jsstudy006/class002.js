var numbers = [12, 34, 57, 28, 39, 10, 6, 56, -23, -65, -40];
numbers.sort(function (a, b) { return a - b; });
numbers.forEach(function (number) { return console.log(number); });
console.log('Max number is ' + Math.max.apply(Math, numbers));
