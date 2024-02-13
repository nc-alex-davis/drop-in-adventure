# Iteration

### What you should know

- How to write a `for` loop

- What the three parts of a `for` loop are for (initialisation, condition, advancement to next loop)

- Uses of a `for` loop

- Different types of iteration `for..in`, `for..of`

- What is an infinite loop and how could it occur?

> setting up a for loop

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- what are the roles of the three parts of the `for` loop?

- what does `i++` do?

> using a variable in the condition statement

```js
const redBalloons = 99;

for (let i = 0; i < redBalloons; i++) {
  console.log(`${i} Luftballoons go by`);
}
```

> using a length of a String / Array

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);
}

const abbaSongs = [
  'Waterloo',
  'Dancing Queen',
  'Mamma Mia',
  'Gimmie! Gimmie! Gimmie!',
];

for (let i = 0; i < abbaSongs.length; i++) {
  console.log(`I can't stop singing ${abbaSongs[i]}!`);
}
```

> Using `for..of` with Arrays and Strings

```js
const biscuitTin = ['Hobnob', 'Nice', 'Cookie', 'Bourbon', 'Jaffa Cake'];

for (let biscuit of biscuitTin) {
  console.log(biscuit);
}

const guitarBrand = 'yamaha';

for (let letter of guitarBrand) {
  console.log(letter);
}
```

> Using `for..in` with Objects

```js
const person = {
  name: 'Doug',
  job: 'Tutor',
  age: 29,
};

for (let property in person) {
  console.log(property); // 'name' .. 'job' .. 'age'
  console.log(person[property]); // 'Doug' .. 'Tutor' .. 29
}
```

### Gotchas

> not using proper variable declaration

```js
for (i = 0; i < 10; i++) {
  // i = 0 is creating a global variable!!
  // don't do this! 😭
  // use `let i = 0` instead!!
  console.log(i);
}

for(animal of jungle){
  // use `let animal` instead!!
}
```

> unnecessary usage of `.length`
```js
const timesToLoop = 5

for(let i = 0; i < timesToLoop.length; i++){
  // ❌ timesToLoop.length === undefined
}
```

> creating an infinite loop

```js
for (let i = 0; i < 10; ) {
  // missing the increment means `i` will never reach 10
  console.log(i);
}

const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  array.push(i);
  // `i` will never match array.length
}
```

> incorrect usage of `for..in` vs `for..of` with Arrays

```js
const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (let day in weekdays) {
  console.log(day); // '0' .. '1' .. '2' .. etc
  // for .. in will iterate over the indexes of an Array
  // note how the values are strings
  // for .. of would give 'monday' .. 'tuesday' .. etc
}
```

> forgetting to use `{}`

```js
for (let i = 0; i < 10; i++) 
    console.log(i);
    console.log('this is not in the loop');
```
> A `for loop` statement without `{}` is still valid JavaScript but will only loop through the _first line_ after the `for loop`. It's better practice to always use `{}` to not only visually show what code you are looping over but also to allow you or your team mates to add more code in the future.
