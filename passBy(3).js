/* let num1 = 5;
let num2 = 7;
// Pass By Value
// We can update any parameter which are primitive and it will not change in outer scope
function multiply(a, b){
    a = 2
    return a*b;
}
console.log(num1)
const output = multiply(num1, num2);
console.log(output) */

// Object and array are pass by reference
// let student1 = { name: "Jalil", partner: "Borsha" };
// let student2 = { name: "raj", partner: "Anika" };

// function makeMovie(couple1, couple2) {
//   couple1.name = "Ononto";
//   couple2.partner = "Mim";
// }
// makeMovie(student1, student2);
// console.log(student1, student2);



function changeNumber(person){
    person.name = 'Jamal';
    console.log(person)
}

const person = {
    name: 'Karim'
}

changeNumber(person);
console.log(person)