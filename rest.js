// const addToCart = (...number) => console.log(number.join(','));

/* function addToCart(...params){
  console.log(`Items added to cart ${params.join(', ')}`)
} */
// addToCart(10, 20, 30, 40, 50, 30432,232,23);

/* const arr = ["Jamal", "Kamal", "Lamal", "Namal" ,1,1,2,3,4];
const [a,b,...d] = arr;
console.log(`${d}`) */
// const [a, b, c, ...d] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d)

/* const circle = {
  radius: 10,
};

const style = {
    backgroundColor: 'red'
}

const solidCircle = {
    ...circle, ...style
};
console.log(solidCircle) */
/* 
const person = {name: 'Ananta', age: 25, favouriteFood: 'Rice'};

const {name, ...rest} = person;
console.log(rest) */

/* const obj1 = {
  x: 1,
  y: 2,
}

const obj2 = {
  a: 10,
  b: 11
};

const obj3 ={...obj1, ...obj2, name: 'Hridoy'}
console.log(obj3) */

/* function descriptionPerson(name,age,...hobbies){
  console.log(`${name} is ${age} years old and he has hobbies like ${hobbies}`)
}

descriptionPerson('Kamal', 22, 'Cycling', 'Reading', 'Gardening', 'walking alone') */

const user = { id: 1, name: 'Alice', password: '12345' };

const {password, ...safeUser} = user;
console.log(safeUser)