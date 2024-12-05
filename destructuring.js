const actor = {
  name: "Ananta",
  age: 11,
  phone: "01832148385",
  money: 12112121,
};

// const { phone, age: boyos } = actor;

// const phone = actor.phone;

// console.log(phone);
// console.log(boyos);
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)

// const numbers = [45, 99, 22, 121, 2323];
// const [first, second, ...rest] = numbers;

// Array Destruction
// const numbers = [45, 99, 22, 121, 2323];
// const [first, second] = numbers;
// console.log(first)
// console.log(second)

// Swapping
/* let x = 20;
let y = 1000;
[x, y] = [y, x];
console.log(x)
console.log(y)
 */

// const serial = [20, 88];
// const [first , second] = serial;
// console.log(first)
// console.log(second)

// const [first, second]= doubleThem(3, 5)
// console.log(first)
// console.log(second)

/* function calculate(length, width){
  const area = length * width;
  const perimeter = 2* (length + width);
  return [area, perimeter];
}
const [area, perimeter] = calculate(20, 18);
console.log(area)
console.log(perimeter) */

// const {student, teacher} = myObject;
// console.log(student, teacher)  `

// ALIAS
// const {student: pupils, teacher: proffessor} = myObject;
// console.log(pupils, proffessor)

/* const user = {
    name: 'Rowan Atkinson',
    popularity: 'Mr Bean',
    city: 'New York'
}

const {popularity: title, name, city} = user;
console.log(title, name, city)
 */

// Array Destructuring Example

const [feeling, fruit, motion] = ["love", "avocado"];
/* console.log(feeling); */

// Skipping items in an array

// const [num1, , , num4] = [1, 2, 3, 4];
// console.log(num4)

/* let a = 10, b = 100;
[b, a] = [a, b];
console.log(a)
console.log(b) */

// let num1, num2, num3;
// [num1, num2 = 9, num3] = [1, , 3];
// console.log(num2)

// Destruction with function

const digits = () => [1, 2, 3, 4];
let firstDigit, others;
/* 
[firstDigit, ...others] = digits();
console.log(others)
 */

/* const [a, , c] = [10, 20, 40];
console.log(c)
 */

// const [digit1, digit2] = digits();
// console.log(digit1)
// console.log(digit2)
