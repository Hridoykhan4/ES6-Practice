const numbers = [3, 5, 6, 2, 1];
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), 0);
// console.log(max)

const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

const total = cart.reduce((acc, item) => acc + item.price, 0);
// console.log(total)

const products = [
  { id: 1, name: "Lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "Mac", price: 150000 },
];

// Map

const names = products.map((name) => name.name);
// console.log(names)

const prices = products.map((p) => p.price);
// console.log(prices);

// For Each

// products.forEach(p => console.log(p.price))

// Filter
const expensive = products.filter((p) => p.price > 50000);
// console.log(expensive)

// Find 50000 er niche

const cheapest = products.find((p) => p.price < 50000);
// console.log(cheapest)

// Reduce
const total2 = products.reduce((acc, num) => acc + num.price, 0);
// console.log(total2)

/* const digits = [2, 3,4,5,6];
for (let i = 0; i < digits.length; i++){
    digits[i] = digits[i] + 1;
}
console.log(digits)
 */

const digits = [2, 3, 4, 7, 6];

// digits.forEach(e => console.log(e + 4))


const arr = [21, 12, 3, 4, 33, 1];
const smallNums = arr.find(num => num < 10);
console.log(smallNums)