# Array Methods

> Note: Being comfortable with writing functions using `for loops` and `if` statements is recommended before learning array methods.

### What you should know

- What the term Array Method means

- What a higher order function/method is

- What the Array method returns

- What the parameters callback function has access to

- How the Array method works

The callback function can either be an arrow function or a regular function declaration

> `.map()`

```js
const pointlessArray = [0, 1, 2, 3];

const catchySong = pointlessArray.map(function (number) {
  // the callback function is invoked with each item of the original array, in order
  console.log(number); // 0 .. 1 .. 2 .. 3

  // Value returned is placed in new array.
  return 'Badger';
});

console.log(catchySong); // ["Badger", "Badger", "Badger", "Badger"]
```

```js
const names = ['hook', 'america', 'jack'];

const captains = names.map(function (name) {
  const capitalisedName = name[0].toUpperCase() + name.slice(1);
  return `Captain ${capitalisedName}`;
});

console.log(captains); // ['Captain Hook', 'Captain America', ' Captain Jack']
```

> `.filter()`

```js
const vets = ['cat', 'cat', 'dog', 'dog', 'cat', 'dog'];

const dogsOnly = vets.filter(function (animal) {
  if (animal === 'dog') {
    return true;
  } else {
    return false;
  }
  // or better:
  // return animal === "dog"
});
```

```js
const menu = [
    {name: "Seitan Strips", diet: 'vegan'}
    {name: "Boiled Egg", diet: 'vegetarian'}
    {name: ".1% milk powder", diet: 'vegetarian'}
    {name: "Grilled Peppers", diet: 'vegan'}
    {name: "Cheese Pizza", diet: 'vegetarian'}
]

const veganItems = menu.filter(function(foodItem){
    return foodItem.diet === 'vegan'
})

console.log(veganItems)
// [{name: "Seitan Strips", diet: 'vegan'}, {name: "Grilled Peppers", diet: 'vegan'}]
```

### Gotchas

> not returning from callback function

```js
const apples = ['good', 'good', 'bad', 'good', 'good'];

const barrelIsSpoiled = apples.some(function (apple) {
  apple === 'bad';
});
```

> bad variable naming

```js
const bookShelf = [
  { title: 'A Fairwell to Arms', category: 'Fiction' },
  { title: 'The British National Formulary', category: 'Non-Fiction' },
  { title: 'The Lord Of The Rings', category: 'Fiction' },
  { title: 'The Road', category: 'Fiction' },
];

const nonFictionBooks = bookshelf.filter(function (x) {
  return x.category === 'Non-Fiction';
  // book would be better here
});
```

### What attendees can research:

- What a callback function is
