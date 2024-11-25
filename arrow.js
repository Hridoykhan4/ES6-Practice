// Function Declaration

// function add(a, b){
//     const result = a + b;
//     return result;
// }
function add(a, b){
    return a + b
}

// Function Expression
const add2 = function(a, b){
    return a - b;
}

// Arrow Function
const add3 = (a,b) => a + b;

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4

const multiply = (num1, num2) => num1 * num2;

// const sum = add3(5, 92);
const sum = add4(2,3,4,5);
console.log(sum)

console.log(multiply(2, 3))

