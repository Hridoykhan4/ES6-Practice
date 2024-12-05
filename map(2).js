const numbers = [2, 3, 4, 6, 7];

function doubleIt(num) {
//   console.log('num now', num)
  return num * 2;
}

// const double2 = (n) => n * 2;

// const result = numbers.map(doubleIt);
// console.log(result)

const output = numbers.map(n => n + 1);
// console.log(output)

const output2 = numbers.map((n) => n * 2);
// console.log(output2)

// const doubled = [];
// for (const number of numbers) {
//     const double = number * 2;
//     doubled.push(double)
// }
// console.log(doubled)


const cart = [
    { product: 'Phone', price: 500 },
    { product: 'Laptop', price: 1000 },
    { product: 'Tablet', price: 300 },
  ];
  
const discountPrice = cart.map(item => {
    const discount = item.price * 0.1;
    return {
        product: item.product,
        price: item.price - discount
    }
});
// console.log(discountPrice)

/* 
Problem: Format User Data for Display
Scenario:
You're building a user profile page for a website. The user data comes from a database, but it needs to be formatted before displaying it. For example:

Full names need to be displayed instead of separate firstName and lastName.
Age should be calculated from their date of birth. */
/* const users = [
    { firstName: 'John', lastName: 'Doe', dob: '1990-01-15' },
    { firstName: 'Jane', lastName: 'Smith', dob: '1985-06-22' },
    { firstName: 'Sam', lastName: 'Brown', dob: '2000-10-30' },
  ];
  
  const information = users.map(user => {
    const fullName = `${user.firstName} ${user.lastName}`
    const birthYear = new Date(user.dob).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    return{
        fullName,
        age
    }
  })
  console.log(information) */

 /*  const products = [
    { name: 'T-Shirt', price: 20, stock: 15, onSale: true },
    { name: 'Jeans', price: 50, stock: 0, onSale: false },
    { name: 'Jacket', price: 100, stock: 10, onSale: true },
  ];

  const updatedProducts = products.map(product => {
    const stockStatus = product.stock > 0 ? 'In Stock' : 'Out of stock';
    let discountPrice;
    if(product.onSale){
        discountPrice =  product.price * 0.8;
    }
    else{
         discountPrice = product.price
    }
    return{
        name: product.name,
        stockStatus,
        discountPrice
    }
  }) */
//   console.log(updatedProducts)

const students = [
    { name: 'Alice', scores: [65, 70, 75] },
    { name: 'Bob', scores: [40, 45, 50] },
    { name: 'Charlie', scores: [85, 80, 90] },
  ];

  const result = students.map(students => {
    const totalScore = students.scores.reduce((sum, score) => sum + score);
    const average = totalScore / students.scores.length;
    const isPassed = average > 50 ? 'passed' : 'failed'
    return{
        name: students.name,
        averageScore:  average.toFixed(2),
        result: isPassed
    }
  })
//   console.log(result)

const products = [
    { name: 'Phone', price: 500 },
    { name: 'Laptop', price: 1000 },
    { name: 'Tablet', price: 300 },
  ];
  
  const exchangeRate = {EUR: 0.9, GBP: 0.8}
  const product = products.map(product => {
    return{
        name: product.price,
        priceUSD: product.price.toFixed(2),
        priceEUR: product.price * exchangeRate.EUR,
        priceGBP: product.price * exchangeRate.GBP
    }
    
  })
  console.log(product)