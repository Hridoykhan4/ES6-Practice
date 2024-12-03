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
bondhu.push(200, 300, 400);
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

/* const person = {
    name: 'Hridoy', 
    age: 25
};

const newPerson = {...person};
newPerson.name = 'Boss'


person.name = 'Hero'
console.log(newPerson)
console.log(person)
 */

/* const newPerson = {...person};
newPerson.name = 'Jamal'
console.log(person)
console.log(newPerson) */


/* const obj1 = {
    a: 2,
    b: 4
};

const obj2 ={
    c:6,
    d: 10
}

const obj4 = {
    age: 23,
    class: 12
}

const obj3 = {...obj1, ...obj2, e: 10, name: 'Jamal', ...obj4, 'fav-color': 'blue'};
console.log({obj3, ...obj4}) */


function list(a,...rest){
    return rest
}
console.log(list(2,3,4,5)
)