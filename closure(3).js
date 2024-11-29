// 1..outerFunction এর ভিতরে একটি ভেরিয়েবল outerVariable এবং একটি innerFunction আছে।
// innerFunction এর ভিতরে outerVariable ব্যবহার করা হয়েছে।
// যখন outerFunction শেষ হয় এবং closureFunc দিয়ে innerFunction কল করা হয়, তখনও innerFunction বাইরের ভেরিয়েবল অ্যাক্সেস করতে পারে।
// এটাই হলো Closure! innerFunction তার scope বা environment মনে রেখেছে।

function outerFunction() {
  let outerVariable = "I am from outerFunction!";

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable
  }

  return innerFunction;
}

/* const closureFunc = outerFunction(); // Execute outerFunction
closureFunc(); // "I am from outerFunction!"
closureFunc(); // "I am from outerFunction!"
closureFunc(); // "I am from outerFunction!"
 */

function kitchen() {
  let roast = 0;
  return function jamal() {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
// console.log(firstServer())
// console.log(firstServer())
// console.log(firstServer())
// console.log(firstServer())

/* function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
} */

/* What is a Closure?
A closure is created when a function:

"Remembers" the variables from its lexical scope (the environment where it was defined), even after the outer function has finished executing.
In simpler terms, a closure lets a function "remember" and access variables from outside its own scope.


/* 
function createCounter() {
    let count = 0; // Private variable

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
How It Works:
createCounter initializes a private variable count.
It returns an inner function that can modify count.
The returned function keeps access to count via closure, even after createCounter has executed. */
