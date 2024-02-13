# Accessing Arrays

### What you should know

- What Arrays are and how they are used

- How items in an Array are ordered and have an `index` reflecting where they are in the Array

- That indexes start at `0`

- How to use square brackets to access an array

- That square brackets can take hard coded numbers or variables storing numbers

- How to access items in a nested Array

> declaring an Array

```js
const letters = ['a', 'b', 'c', 'd'];
```

> Accessing an item in an Array

```js
const letters = ['a', 'b', 'c', 'd'];

const first = letters[0];
const nonExistant = letters[99];

console.log(first); // 'a'
console.log(nonExistant); // undefined
```

> Using a variable to access an item in an array

```js
const index = 3;
const fruit = ['banana', 'pear', 'tomato', 'pineapple', 'strawberry'];

const lunchtimeSnack = fruit[index];
console.log(lunchtimeSnack); // 'pineapple'
```

> Using `i` in a for loop to access each item

> 💡 be sure to go over how a `for loop` works and what we expect `i` to be in the first loop and subsequent loops

```js
const rainbow = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

for (let i = 0; i < rainbow.length; i++) {
  console.log(rainbow[i]);
}
```

> Accessing items from nested Arrays

```js
const meal = [
  ['soup', 'bread'],
  ['pie', 'chips'],
  ['sorbet', 'raspberries'],
];

const theBestBit = meal[1][0];
```

> Accessing items from nested Objects

```js
const team = [
  { name: 'Doug', favColour: 'mustard' },
  { name: 'Jim', favColour: 'teal' },
  { name: 'Sarah', favColour: 'racing green' },
];

const sarahsFavColour = team[2].favColour;
```

### Gotchas

> trying to access properties from nested objects before accessing the index of that object

```js
const team = [
  { name: 'Doug', favColour: 'mustard' },
  { name: 'Jim', favColour: 'teal' },
  { name: 'Sarah', favColour: 'racing green' },
];

const sarahsFavColour = team.favColour; // ❌
const sarahsFavColour = team.favColour[3]; // ❌
```
