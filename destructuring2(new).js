/* const numbers = [20, 30, 40, 20, 22];

const [x,y] = numbers;
console.log(x) */

/* const boxify = (num1, num2) => {
    const nums = [num1 * 2, num2 * 3];
    return nums;
}

const [x, y] = boxify(10, 20);
console.log(x)
console.log(y) */


const stu = {
    name: 'kim',
    age: 32,
    movies: ['Dhakar Pola', 'Hero The Superstar']
}
/* 
const [first, second] = stu.movies;
console.log(second) */

const {name: intro, salary} = {name: 'Allu', age: 14, salary: 12000};
const employee = {
    ide: 'VS',
    designation: 'Developer',
    machine: 'mac',
    language: ['C','C++', 'Java'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Kumarkhali',
        watch:{
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {brand} = employee?.specification?.watch;
console.log(brand)

// const [a,b,c] = employee.language;
// console.log(c)


// const {specification:{height}, specification:{}} = employee 

// const {height, address} = employee.specification;
// console.log(height)