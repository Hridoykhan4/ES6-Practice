const students = [
    { id: 1, name: 'Alice', score: 45 },
    { id: 2, name: 'Bob', score: 55 },
    { id: 3, name: 'Charlie', score: 60 },
    { id: 4, name: 'Daisy', score: 85 }
];

const bonus = students.map(student => ({
    ...student,score: student.score + 5
}));
console.log(bonus)

/* const above50 = bonus.filter(student => student.score > 50);
console.log(above50);

const firstAbove90 = bonus.find(student => student.score >= 90);
console.log(firstAbove90) */

/* 
Use forEach to log each student's name.
Use map to create an array of students' scores increased by 5 as a bonus.
Use filter to find students who scored above 50 after the bonus.
Use find to get the first student who scored above 90 after the bonus.
Use reduce to calculate the total of all scores after the bonus.
*/