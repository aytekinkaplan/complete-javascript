var people = ["Jenny", "Michael", "Jay", "Kim", "Henry", "Paul", "Sammy"];
people.forEach(function (person) { return console.log(person); });
people.forEach(function (person, index) { return console.log(person, index); });
console.log(people.indexOf("Henry"));
console.log(people.includes("Henry"));
if (people.includes("Henry")) {
    console.log("Henry is here");
}
else {
    console.log("Henry is not here");
}
