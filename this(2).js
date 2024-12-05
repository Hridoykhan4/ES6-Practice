class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}

const kodom = new Person("Hridoy Khan", 24);
// console.log(kodom);
// kodom.sleep()
kodom.activity()

// Notation again
const person = {
  name: "Baba Khan",
  job: "Badam Khai",
  2: 'third',
  'full-name': 'Baba Jamal Khan'
};
// const knownFor = "name";
// console.log(person[knownFor]);
// console.log(person[2])
// console.log(person["full-name"])
