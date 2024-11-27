const a = 55;
const numbers = [12, 33, 44];
const person = {
  name: "Shakib Khan",
};

// console.log(`${person.name} has a ${a + numbers[0]}`)

const {name, ...rest} = { x: 2, y: 5, z: 4, name: "Obhijeet", age: 22 };
// console.log(rest)


const [first, ...others] = ['ram', 'sam', 'jodu', 'madhu'];
console.log(others)

