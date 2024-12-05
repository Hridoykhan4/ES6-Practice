// 1..outerFunction এর ভিতরে একটি ভেরিয়েবল outerVariable এবং একটি innerFunction আছে।
// innerFunction এর ভিতরে outerVariable ব্যবহার করা হয়েছে।
// যখন outerFunction শেষ হয় এবং closureFunc দিয়ে innerFunction কল করা হয়, তখনও innerFunction বাইরের ভেরিয়েবল অ্যাক্সেস করতে পারে।
// এটাই হলো Closure! innerFunction তার scope বা environment মনে রেখেছে।

/* const globalVariable = 'I am Global'
const down = 'Jamal'
function outerFunction(){
  let outerVariable = 'I am from Outer Function';
  function innerFunction(){
    console.log(outerVariable)
    console.log(globalVariable)
    console.log('I am from inner Function')
    console.log(down)
  }
  return innerFunction;
}
const outerFunc = outerFunction();
outerFunc()
 */

/* 

const closurefunc = outerFunction();
closurefunc()
closurefunc()
closurefunc() */

/* const closureFunc = outerFunction(); // Execute outerFunction
closureFunc(); // "I am from outerFunction!"
closureFunc(); // "I am from outerFunction!"
closureFunc(); // "I am from outerFunction!"
 */
 
/* function kitchen() {
  let roast = 0;
  return function jamal() {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
console.log(firstServer())
console.log(firstServer())
console.log(firstServer());
console.log('Hello')
console.log(firstServer());
 */

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

  /* function createTimer(){
    const startTime = Date.now()
    
    return function(){
      const elapsedTime = Date.now() - startTime;
      console.log(`Elapsed time ${elapsedTime}`)
    }
  }

const timer = createTimer();
setTimeout(() => timer(), 1000) */

/* 
function createGreeter(name){
  return function (message){
    console.log(`${message}, ${name}`)
  }
}

  const greetHridoy = createGreeter('Hridoy');
  greetHridoy('Good Morning')
 */

    // Very GOod example Indeed
/* function greetingFactory(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  }
}

const sayhello = greetingFactory('Hello');
const sayBye = greetingFactory('Good Bye');
console.log(sayhello('Zara'))
console.log(sayBye('Zara'))
 */


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




