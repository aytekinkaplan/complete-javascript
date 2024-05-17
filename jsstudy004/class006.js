var jane = {
    name: 'Jane',
    age: 25,
    email: 'jane@me.com',
    greet: function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    },
    updateEmail: function (newEmail) {
        this.email = newEmail;
        return this.email;
    }
};
console.log(jane.greet());
jane.phone = '555-555-5555';
console.log(jane);
