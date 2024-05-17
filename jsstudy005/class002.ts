type Person = {
    name: string,
    lastName: string,
    age: number,
    job: string,
    alive: boolean,
    address: string,
    phone: number,
    email: string,
    married: boolean,
    children: number
}

const michael: Person = {
    name: "Michael",
    lastName: "Jordan",
    age: 35,
    job: "NBA",
    alive: true,
    address: "123 Main Street",
    phone: 1234567890,
    email: "michael@jordan",
    married: false,
    children: 0
}

for (const [key, value] of Object.entries(michael)) {
    console.log(`${key}: ${value}`);
}