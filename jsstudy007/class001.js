var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Use of freeze
var person = { name: 'John', age: 30 };
Object.freeze(person);
person.name = 'Peter';
person.age = 31;
console.log(person);
// Use of seal
var person2 = { name: 'John', age: 30 };
Object.seal(person2);
person2.name = 'Peter';
person2.age = 31;
console.log(person2);
// Use of keys
var person3 = { name: 'John', age: 30 };
var keys = Object.keys(person3);
console.log(keys);
// Use of values
var person4 = { name: 'John', age: 30 };
var values = Object.values(person4);
console.log(values);
// Use of entries
var person5 = { name: 'John', age: 30 };
var entries = Object.entries(person5);
console.log(entries);
// Use of assign
var person6 = { name: 'John', age: 30 };
var person7 = { name: 'Peter', age: 31 };
var person8 = Object.assign({}, person6, person7);
console.log(person8);
// Use of spread
var person9 = { name: 'John', age: 30 };
var person10 = { name: 'Peter', age: 31 };
var person11 = { name: 'George', age: 32 };
var person12 = __assign(__assign(__assign({}, person9), person10), person11);
console.log(person12);
// Use of merge
var person13 = { name: 'John', age: 30 };
var person14 = { name: 'Peter', age: 31 };
var person15 = __assign(__assign({}, person13), person14);
console.log(person15);
