/* const addToCart = (...number) => number;
console.log(addToCart(10, 20, 30, 40, 50, 30)); */

// const arr = ["Jamal", "Kamal", "Lamal", "Namal" ,1,1,2,3,4];
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

const person = {name: 'Ananta', age: 25, favouriteFood: 'Rice'};

const {name, ...rest} = person;
console.log(rest)