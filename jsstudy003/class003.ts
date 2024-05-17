const people: string[] = ["Jenny", "Michael", "Jay", "Kim", "Henry", "Paul", "Sammy"];
people.forEach((person) => console.log(person))

people.forEach((person, index) => console.log(person, index));

console.log(people.indexOf("Henry"));

console.log(people.includes("Henry"));

if (people.includes("Henry")) {
    console.log("Henry is here");
} else {
    console.log("Henry is not here");
}

if (!people.includes("Henry")) {
    console.log("Henry is not here");
} else {
    console.log("Henry is here");
}
