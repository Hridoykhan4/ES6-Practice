// task -1: console log the secondary school location of Sophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};

// console.log(data.Sophia.study[1].secondary[1])

// task-2: console .log  output: Petersburg, Herry
let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

// console.log(students['2222']['address']['city']);
// console.log(students['3333'].name)

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};

// console.log(data2.data[0].bookDetails.name)

// Even Number
/* const arr = [1, 3, 5, 7, 9];

function doubleIt(num) {
  return num + 1;
}

const evenArr = arr.map(doubleIt);
console.log(evenArr); */

/* for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 1;
}
console.log(arr) */

// const newArray = []
/* for (const element of arr) {
    newArray.push(element + 1);
};
console.log(newArray) */

// Task 2
// const numbers = [33, 50, 79, 78, 90, 101, 30];
// const divisible = numbers.filter(n => n % 10 === 0);
// console.log(divisible)

// const firstFind = numbers.find(n => n % 2 === 0);
// console.log(firstFind)

/* const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'senior'}
];

const seniorRank = instructor.filter(n => n.position.toLowerCase() === 'Senior'.toLowerCase());
console.log(seniorRank) */

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Sucharita", age: 22 },
];

/* let sum = 0;
for (const element of people) {
    sum += element.age;
} */
console.log(sum);
const ageTotal = people.reduce((acc, num) => acc + num.age, 0);
console.log(ageTotal);
