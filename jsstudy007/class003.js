var user = {
    name: 'John',
    age: 30,
    skills: ['JavaScript', 'HTML', 'CSS']
};
for (var _i = 0, _a = Object.entries(user); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key, value);
}
console.log(Object.entries(user));
Object.keys(user).forEach(function (key) {
    console.log(key, user[key]);
});
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.entries(user).map(function (_a) {
    var key = _a[0], value = _a[1];
    return ({ key: key, value: value });
}));
