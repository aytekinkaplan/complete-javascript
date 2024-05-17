type Person = {
    name: string;
    age: number;
    email: string;
    address?: string; // Optional property
    phone?: string; // Another optional property
    greet: () => string; // Method to greet
    updateEmail: (newEmail: string) => string; // Method to update email
}

const jane: Person = {
    name: 'Jane',
    age: 25,
    email: 'jane@me.com',
    greet: function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    updateEmail: function (newEmail: string) {
        this.email = newEmail;
        return this.email;
    }
}

console.log(jane.greet());

jane.phone = '555-555-5555';

console.log(jane);