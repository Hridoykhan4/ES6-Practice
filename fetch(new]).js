const stu = {
    name: 'kim',
    age: 32,
    movies: ['Dhakar Pola', 'Hero The Superstar']
}

const nums = [10, 20, 30, 10];
// nums.forEach((num) => console.log(num))
// nums.map((n) => n * 2)


const Json = JSON.stringify(stu);
// console.log(Json);

const obj = JSON.parse(Json);
// console.log(obj)

const products = [
    {name: 'Laptop', price: 32220, brand: 'Lenovo', color: 'Silver'},
    {name: 'phone', price: 12220, brand: 'Lenovo', color: 'Silver'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'glass', price: 300, brand: 'ribob', color: 'black'},
    {name: 'camera', price: 3003, brand: 'canon', color: 'ash'},
];

// const newProduct = {name:'JHamal', price: 20000, brand: 'Lal'};

// const add = [...products, newProduct];
// console.log(add)

// Create a new array without a specific item

const remaining = products.filter((product) => product.name !== 'phone');
console.log(remaining)