/* *
* 8 ways to get undefined
1...variable that is not initialized,will console undefined
2 ... function with no return will give undefined
3... parameter that is not passed will be undefined
4... if return has nothing after return keyWord it's gonna return undefined
5...properties that doesn't exist on an object, will return undefined
6...accessing array element outside the index range
7...deleting an element outside an array
8...set e value directly to undefined
 */
let first;

function second(a, b) {
  const total = a + b;
}
// const result = second();
// console.log(result)

function third(a, b, c, d) {
  const total = a + b + c + d;
  // console.log(a , b, c, d);
}
// third(2, 4);




function noNegative(a, b){
  if(a < 0 || b < 0){
    return 
  }
  return a+b;
}
// console.log(noNegative(2, -5))


const fifth = {
  id: 2, 
  name: 'ponchom',
  age: 30
}

// console.log(fifth.age, fifth.salary)


// The index that is out of the index will return undefined 
const sixth = [4, 66, 11, 75,11];
// delete sixth[1]
// console.log(sixth[8])
// console.log(sixth)


// const eighth = undefined

// Jodi bujhaite hy ei jinishTa nai,onk shmy server theke data paite gele explicitly bola thake data ta nai..
const ninth = null;

console.log(typeof null)



// const numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(3, 0, 100, 200);
// console.log(numbers)