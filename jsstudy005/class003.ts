const person: string[] = [
    "Michael",
    "Jordan",
    "NBA",
    "35",
    "1234567890",
    "michael@jordan",
    "123 Main Street",
    "false",
]

// Loop through the array and log each element
for (let i = 0; i < person.length; i++) {
    console.log(person[i]); // Output each element in its original form
}

// Convert each element to uppercase and log it
for (let i = 0; i < person.length; i++) {
    person[i] = person[i].toUpperCase(); // Convert each element to uppercase
    console.log(person[i]); // Output the uppercase element
}

// Convert each element to lowercase and log it
for (let i = 0; i < person.length; i++) {
    person[i] = person[i].toLowerCase(); // Convert each element to lowercase
    console.log(person[i]); // Output the lowercase element
}

// Capitalize the first letter of each element
for (let i = 0; i < person.length; i++) {
    person[i] = person[i].charAt(0).toUpperCase() + person[i].slice(1); // Capitalize the first letter
}

// Log each element with its type
for (let i = 0; i < person.length; i++) {
    console.log(person[i], typeof person[i]); // Output each element and its type
}
