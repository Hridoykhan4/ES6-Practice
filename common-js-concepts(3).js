// Primitive
const a = 5;
const b = "Kala Mia";

// Non preemptive, js is dynamic type programming language
const ages = [10, 20, 12, 23];
const student = { id: 22, class: 7 };
// console.log(typeof a, typeof b, typeof ages, typeof student);

/* let x = 5;
let y = x;
console.log(x, y);
y = 6;
console.log(x, y) */

// They both holds the same reference
const p = { job: "Web Developer" };
let q = p;
// q = {job: 'Backend'}
q.job = "front end Developer";
console.log(p, q);
