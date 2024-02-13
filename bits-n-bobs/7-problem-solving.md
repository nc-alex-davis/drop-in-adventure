# Problem Solving

## Top tips

- There's always going to be more than one way to solve a problem so **don't be discouraged if you see a more advanced/complex solution**. What matters is that it works and is readable.

- Taking breaks is important. You won't be able to problem solve if you're tired or frustrated.

- Don't pick a kata that's too hard. Try not to attempt one that uses more than one or two techniques that you're less comfortable with.

- If you get really stuck - bookmark it, move on and come back to it!

## Approach:

1. Read the instructions and fully understand what is expected

   - what _parameters_ does the function have? What data types are they?

   - what is the _expected return value_ of the function? What data type is it?

2. Break the problem down

   - Don't even try solving it all in one go

   - How would you approach solving this without code?

   - Break it down into step by step instructions for yourself - _write these down as comments_

     e.g:

     > // set up count
     >
     > // go through sentence letter-by-letter
     >
     > // if the letter is the one we're looking for -> add 1 to count
     >
     > // return count

   - if you know what JavaScript code that could help with these steps - great! if not - that's okay! You can find out once you get to that step

   - if it helps, grab some paper and a pen and write some notes and draw some diagrams!

3. Tackle it step-by-step

   - Treat each step as it's own stand-alone challenge

   - Write some code to do each step then use `console.log` to see if what you've written has accomplished what you want.

   - If you're not sure how to do something - search for it on the internet! You often don't need to use technical terminology in your search

     e.g:

     > _"turn number into string in JavaScript"_ 🔍 🌍

     💡 : When researching on the internet take notes of the things you learn

4. Debugging (or - what to do when things go wrong)

   - Run your code regularly and keep using `console.log` to see how your code is behaving

   - Learn to love error messages 🥰 - they've been written by developers who want to help you! Read the message carefully and try to understand exactly what it's telling you then question why your code is producing that error and what you could to to fix it or investigate further

   > `Error: shifted is not a function`
   >
   > 🤔 Where did I use "shifted" in my code?
   >
   > 🤔 If it's not a function what is it...?
   >
   > 🤔 Did I use the correct function? I'd better look on the internet!

   > `Error: expected 5 to equal 0`
   >
   > 🤔 why did my function return 0 when it should have returned 5...?
   >
   > 🤔 I have some code to add to the count... maybe I should investigate why that line isn't being read...
   >
   > 🤔 Is it an issue with my `for` loop... or my `if` statement?

## Some good code wars katas

### [Split the bill - 7kyu](https://www.codewars.com/kata/5641275f07335295f10000d0)

- Objects, strings and numbers

- Accessing key names & values of objects

- Dynamically assigning keys

- Iteration

- Maths

### [Largest 5 digit number in a series - 7kyu](https://www.codewars.com/kata/51675d17e0c1bed195000001/javascript)

- Arrays and numbers

- Type coercion

- Iteration & accessing segments of a string

- Conditional logic

### [Largest pair sum in Array - 7kyu](https://www.codewars.com/kata/556196a6091a7e7f58000018/javascript)

- Arrays and numbers

- Iteration

- Conditional logic
