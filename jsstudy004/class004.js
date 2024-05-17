var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
// Calculate BMIs
mark.calcBMI();
john.calcBMI();
// Compare BMIs and log the result
if (mark.bmi > john.bmi) {
    console.log("".concat(mark.fullName, "'s BMI (").concat(mark.bmi, ") is higher than ").concat(john.fullName, "'s (").concat(john.bmi, ")!"));
}
else if (john.bmi > mark.bmi) {
    console.log("".concat(john.fullName, "'s BMI (").concat(john.bmi, ") is higher than ").concat(mark.fullName, "'s (").concat(mark.bmi, ")!"));
}
else {
    console.log("".concat(mark.fullName, " and ").concat(john.fullName, " have the same BMI (").concat(mark.bmi, ")!"));
}
