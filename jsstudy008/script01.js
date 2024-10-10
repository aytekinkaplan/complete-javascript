// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

const BMI = (mass, height) => {
  return mass / (height * height);
};

// Test Data 1
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = BMI(markMass1, markHeight1);
const johnBMI1 = BMI(johnMass1, johnHeight1);
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Test Data 1:");
console.log(
  `Mark's BMI: ${markBMI1}, John's BMI: ${johnBMI1}, Mark has a higher BMI: ${markHigherBMI1}`
);

// Test Data 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = BMI(markMass2, markHeight2);
const johnBMI2 = BMI(johnMass2, johnHeight2);
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Test Data 2:");
console.log(
  `Mark's BMI: ${markBMI2}, John's BMI: ${johnBMI2}, Mark has a higher BMI: ${markHigherBMI2}`
);
