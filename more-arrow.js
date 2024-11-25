const difference = (x, y) => x - y;
// console.log(difference(10, 2))

// Single Parameter
const getAge = person => person.age 

const student = {
    name: 'Hridoy', 
    age: 22
}

const age = getAge(student);
// console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([2,1,4,5]);
// console.log(third)

const doubleIt = number => number * 2;
// console.log(doubleIt(5));

// No Parameter
const getPi = () => Math.PI;
// console.log(getPi())


// Large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result
}

console.log(doMath(2,1,3))