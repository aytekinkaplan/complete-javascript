// Calculating BMI

const BMI = (mass, height) => {
  return mass / (height * height);
};

const markBMI = BMI(78, 1.69);
const johnBMI = BMI(92, 1.95);
const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${markBMI}) is higher than Mark's (${johnBMI})!`);
}
