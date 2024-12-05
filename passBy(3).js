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


/* function changeName(person){
    person.name = 'Kim Xong';
    console.log('Inside: ',person.name)
}

const person = {name: 'Karim'};
changeName(person);
console.log('Outside: ',person)
 */

/* function changeNumber(person){
    person.name = 'Jamal';
    console.log(person)
}

const person = {
    name: 'Karim'
}

changeNumber(person);
console.log(person) */

const updateUserProfile = function(a){
    a.name = 'Marina Bay',
    a.email = 'KalaShap@gmail.com'
}
 

let userProfile = { name: 'Karim', email: 'karim@example.com' };
updateUserProfile(userProfile); // Passing an object
console.log('Outside Function:', userProfile);