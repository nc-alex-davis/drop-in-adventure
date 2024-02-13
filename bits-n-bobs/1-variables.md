# Variables

### What you should know:

- What is a variable?

- Why do we use variables?

- How to `console.log` a variable

- What's the difference between how we declare variables? `let` vs. `const` vs. `var`

- What's important about the name we choose for a variable?

- What is scope and how does it effect how we write our code?

> declaring and reassigning a variable with `let`

```js
let name = 'Bea';

name = 'Charlotte';
```

> declaring a variable with `const`

```js
const isTimeToParty = true;

// ❌ cannot reassign to a constant variable
isTimeToParty = false;

const inviteList = [];

// ☑️ you can still add, remove and change items in arrays&objects
inviteList.push('Jim');
inviteList.push('Liam');
inviteList.push('Dave');

// ❌ you just can't reassign the variable itself
inviteList = 'something else entirely';
```

> scope of `let` and `const`

```js
const scopeA = 'I can be accessed from anywhere';

if (true) {
  const scopeB = 'I can only be used inside this block';
  console.log(scopeA); // ☑️
  console.log(scopeB); // ☑️
}

console.log(scopeB); // ❌

if (true) {
  const scopeB = "I can also be called scopeB - i'm not in the same scope";
}
```

> declaring a variable with `var`

```js
// very similar to `let` (can be reassigned)
// is "function scoped" instead of "block scoped"
if (true) {
  var name = 'Izzi';
  console.log(name); // "Izzi"
}

if (true) {
  console.log(name); // "Izzi"
  var name = 'Dave';
  console.log(name); // "Dave"
  // how confusing! 😭😷
}

// having access to variables in unrelated places could be problematic and confusing
// you don't want to be accidentally effecting the wrong data!
// use `let` or `const` instead
```

> using `console.log()`

```js
const message = 'Hello from everyone at Northcoders! 👋';

// 💡 log variables
console.log(message);
// 'Hello from everyone at Northcoders! 👋'

// 💡 add strings to logs to make them easier to find/understand in the output
let num = 5;
console.log('num before increase 👉 ', num);
// 'num before increase 👉 ' 5

num++;
console.log('num AFTER increase 👉 ', num);
// 'num AFTER increase 👉 ' 6
```

### Gotchas

> Using a number or symbol as the first character of a variable

```js
// ❌
10 = 'javaScript'
2apples = ['apple', 'apple']
// you may use numbers in a variable but the first character must be a letter
```

> declaring global variables

```js
// ❌
a = 'coding';
// this is valid javascript but *don't do this*!
// this will declare a _global variable_ which will be hard to keep track of and _will_ cause some frustrating bugs
```

> bad variable names

```js
// x ?? what does that mean?
let x = {
  city: 'Brighton',
  county: 'East Sussex',
  piers: 1,
  aggressiveSeagulls: true,
};

// no need to shout 🙉
let HOLIDAYPLANS = `Visit sister in ${x.name}`;

// use camelCase, not snake_case
let seaside_reptile_population = 'low... for now...';
```

> even console.logs can cause errors

```js
const fruit = 'banana';

console.log(vegetable);
// ❌ ReferenceError: vegetable is not defined
```

### Links

- [W3 Schools - let](https://www.w3schools.com/js/js_let.asp)
- [W3 Schools - const](https://www.w3schools.com/js/js_const.asp)
