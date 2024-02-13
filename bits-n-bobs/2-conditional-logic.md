# Conditional Logic

### What you should know

- How to write an `if` statement

- What a `Boolean` is

- What "truthy" and "falsy" values are

- difference between `===` and `!==`

- difference between `==` and `===`

---

> An `if` statement that passes

```js
const bool = true;

if (bool) {
  console.log('expression in if statement was evaluated as true!');
}
```

> An `if` statement that fails

```js
const bool = false;

if (bool) {
  console.log('this will not run');
} else {
  console.log('expression in if statement was evaluated as false!');
}
```

> An `if` statement that takes an expression that explicitly resolves to a `Boolean`

```js
const name = 'David';

if (name === 'Sarah') {
  console.log('Hello Sarah!');
} else {
  console.log("You're not Sarah!");
}
```

> An `if` statement that takes a value which is "truthy"

```js
const lemons = 99;

if (lemons) {
  console.log('Making lemonade...');
}
```

- Truthy values
  - `"string of any length"`
  - `" "` (including spaces)
  - `123` any positive number
  - `-123` any negative number
  - `[]`, `{}` objects and arrays (even if they're empty!)
- Falsy Values
  - `""` empty strings
  - `0`
  - `undefined`
  - `null`
  - `NaN`

> ternary operators

```js
const example = true ? 'condition is true' : 'condition is false';
console.log(example); // "condition is true"

const exampleTwo = false ? 'condition is true' : 'condition is false';
console.log(exampleTwo); // "condition is false"

// nested conditions
const canGoUnderIt = false;
const canGoOverIt = false;
const canGoAroundIt = false;
const canGoThroughIt = true;

const adventure = canGoUnderIt
  ? 'caving expedition' // if `canGoUnderIt` is truthy: adventure = "caving expedition"
  : canGoOverIt // else, evaluate this expression instead
  ? 'hiking trail' // if `canGoOverIt` is truthy: adventure = "hiking trail" ... and so on
  : canGoAroundIt
  ? 'seaside getaway'
  : canGoThroughIt
  ? 'bear hunt'
  : 'road less travelled'; // if all conditions were false: this is default value

console.log("we're going on a ", adventure);
// we're going on a bear hunt

// 💡 this might be a little bit hard to read, no?
// consider using a normal if/else would be better in certain situations
```

### Gotchas

```js
const bool = false;

if (bool) console.log('colours of the world'); // this will not be run...
console.log('spice up your life!'); // but this will!
```

> An `if` statement without `{}` is still valid JavaScript but will only conditionally run the _first line after the `if` statement_. It's better practice to always use `{}` to not only visually show what code you are applying the conditional logic to but also to allow you or your team mates to add more code in the future.
