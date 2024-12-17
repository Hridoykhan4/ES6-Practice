// How 2 declare a variable using let and const

// basic condition

// Array

// Function

const stu = {
    name: 'kim',
    age: 32,
    movies: ['Dhakar Pola', 'Hero The Superstar']
}

const numbers = [20, 30, 40, 20, 22];


const products = [
    {name: 'Laptop', price: 32220, brand: 'Lenovo', color: 'Silver'},
    {name: 'phone', price: 12220, brand: 'Lenovo', color: 'Silver'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'glass', price: 300, brand: 'ribob', color: 'black'},
    {name: 'camera', price: 3003, brand: 'canon', color: 'ash'},
];

/* const filter = products.find((product) => product.price < 5000);
console.log(filter) */
const findN = products.filter((product) => product.brand.length === 5);
console.log(findN)