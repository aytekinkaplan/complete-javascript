// Use of hasOwnProperty
class C {
  [key: string]: any;

  [key: number]: any;

  [key: symbol]: any;
}

new C().hasOwnProperty(1);

new C().hasOwnProperty('foo');

new C().hasOwnProperty('bar');

new C().hasOwnProperty('baz');

new C().hasOwnProperty('qux');

const user = {
  name: 'John',
  age: 30,
  skills: ['JavaScript', 'HTML', 'CSS'],
  [Symbol('id')]: 1
};

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

console.log(Object.entries(user));