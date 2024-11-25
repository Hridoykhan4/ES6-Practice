const max = Math.max(3, 2, 1, 6, 11, 212, 1111);
// console.log(max)

// const numbers = [201, 11, 121, 323, 11, 44, 56];
// console.log(...numbers)
// const arrayMax = Math.max(...numbers);

// console.log(arrayMax);

// Use spread Operator To Copy.....
const friends = [3, 4, 6, 7, 11];
const bondhu = [friends];
const dosto = [...friends];
friends.push(100, 200, 300);
bondhu.push(200, 300, 400)
// console.log(dosto);
// console.log(friends);

const digits = [...friends, 9999, 100, 20];
// console.log(digits);


/* const letter = ['a', 'b', 'c'];
const letter1 = [2, 3, 4, ...letter, 5, 6];
console.log(letter)
console.log(letter1) */

/* const numbers = [1, 3, 4];
const add = (a,b,c) => a + b + c;

console.log(add(numbers)) */

// Merging By Spread Operator
/* const arr = [1, 2];
const arr1 = [3, 4];
console.log([...arr, ...arr1]) */

const person = {
    name: 'Hridoy', 
    age: 25
};

const newPerson = {...person};
newPerson.name = 'Jamal'
console.log(person)
console.log(newPerson)