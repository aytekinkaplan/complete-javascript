var _a;
// Use of hasOwnProperty
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
new C().hasOwnProperty(1);
new C().hasOwnProperty('foo');
new C().hasOwnProperty('bar');
new C().hasOwnProperty('baz');
new C().hasOwnProperty('qux');
var user = (_a = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'HTML', 'CSS']
    },
    _a[Symbol('id')] = 1,
    _a);
for (var _i = 0, _b = Object.entries(user); _i < _b.length; _i++) {
    var _c = _b[_i], key = _c[0], value = _c[1];
    console.log(key, value);
}
console.log(Object.entries(user));
