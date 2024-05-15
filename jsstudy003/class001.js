var friend1 = "Michael";
var friend2 = "Steven";
var friend3 = "Peter";
var friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
friends.push("Angela");
friends.push("Mary");
friends.push("Devon");
friends.push("Paul");
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
friends[1] = "Lilly";
console.log(friends[1]);
var years = [1991, 1984, 2008, 2020];
var calcAge = function (birthYear) { return 2037 - birthYear; };
for (var i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
    console.log("In ".concat(years[i], " I was ").concat(calcAge(years[i]), " years old."));
    console.log("I have ".concat(friends.length, " friends, and my best friend is ").concat(friends[3], "."));
}
calcAge(1991);
calcAge(1984);
calcAge(2008);
calcAge(2020);
console.log(years);
console.log(years[2]);
years.push(1999);
console.log(years);
console.log(years[3]);
console.log(years[years.length - 1]);
var jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
for (var i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
}
for (var i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
}
for (var i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string")
        continue;
    console.log(jonas[i], typeof jonas[i]);
}
for (var i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number")
        break;
    console.log(jonas[i], typeof jonas[i]);
}
