const glass = {
  name: "glass",
  color: "golden",
  price: 10,
  isCleaned: true,
};

// Key gula k array er bhitore pabo
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ];

// Same like keys we get values inside an array.We can retrieve each individuals by using for...of
const values = Object.values(glass);
// console.log(values)

// const pair = Object.entries(glass);
// console.log(pair)
// Array of Array, two dimensional array
/* 
[
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 10 ],
    [ 'isCleaned', true ]
  ] */

// delete glass.isCleaned
console.log(glass);

// Remove the property isCleaned and return a new object with rest of the properties
// const {isCleaned, ...rest} = glass;
// console.log(rest)

// Freeze
// Object.freeze(glass);
glass.source = "Made In Bangladesh";
// console.log(glass)
/* 
const zoo = {
  name: "Lion",
  eat: "meat",
};

const pair = Object.entries(zoo);
console.log(pair) */