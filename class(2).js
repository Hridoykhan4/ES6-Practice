const products = [
  { id: 1, name: "Lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "Mac", price: 150000 },
];

// has some properties, method
class Products{
    country = 'Bangladesh';
    constructor(name) {
        this.name = name
    }
    speak(talk){
        console.log(`Taking about ${talk}`)
    }
}

const lenovo = new Products('Lenovo Kinsi');
// console.log(lenovo)
// lenovo.speak('How Are you')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const t1 = new Teacher('Shahjahan Topon', 'Physics');

const t2 = new Teacher('Rashid', 'English');
// console.log(t1, t2)


class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `Hi this is ${this.name} and I am ${this.age} years old`
    }
}
const student1 = new Student('Hridoy', 24);
console.log(student1.introduce())