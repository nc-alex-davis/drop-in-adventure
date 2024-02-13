# Accessing Objects

### What you should know

- What Objects are and how they are used

- How data is stored in objects using `key`, `value` pairs

- How to use dot notation or square brackets to access data in an object

- How to access nested objects/arrays inside objects

> Declaring an Object

```js
const person = {
  name: 'Doug',
  job: 'Tutor',
  age: 29,
};
```

> Accessing items in an object using dot notation

```js
const person = {
  name: 'Doug',
  job: 'Tutor',
  age: 29,
};

console.log(person.name); // 'Doug'
console.log(person.bankDetails); // undefined
```

> Accessing items in an object using square brackets

```js
const keyToAccess = 'job';

const person = {
  name: 'Doug',
  job: 'Tutor',
  age: 29,
};

console.log(person[keyToAccess]); // 'Tutor'
```

> Accessing nested Objects/Array

```js
const party = {
  location: 'Lazer Quazar',
  host: {
    name: 'Sam',
    birthday: true,
  },
  invitees: ['Izzi', 'Paul', 'David'],
};

console.log(party.host.name); // 'Sam'
console.log(party.invitees[0]); // 'Izzi'
```

### Gotchas

> Trying to access properties using an index

```js
const car = {
  colour: 'yellow',
  type: 'sports',
  doors: 2,
};

const carColour = car[0]; // ❌
```

> Cannot access property `x` of undefined

```js
const puppy = {
  name: 'Ruby',
  fleas: false,
  faveFood: ['biscuits', 'trousers', 'treats'],
};

console.log(puppy.vetAppointments[0]);
// TypeError: Cannot read property '0' of undefined
```
