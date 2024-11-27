const numbers = [2,3,4,6,7];

function doubleIt(num){
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2

const result = numbers.map(doubleIt)
// console.log(result)

const output = numbers.map(double2);
// console.log(output)


const output2 = numbers.map(n => n * 2);
console.log(output2)










// const doubled = [];
// for (const number of numbers) {
//     const double = number * 2;
//     doubled.push(double)
// }
// console.log(doubled)