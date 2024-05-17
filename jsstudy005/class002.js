var michael = {
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
};
for (var _i = 0, _a = Object.entries(michael); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log("".concat(key, ": ").concat(value));
}
