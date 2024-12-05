/* function greeting(greetingHandler, name){
  greetingHandler(name)
}

function greetingHandler(name){
  console.log('Good Morning', name)
}

function greetEvening(name){
  console.log('Good Evening', name)
}

function greetNight(name){
  console.log('Good Night', name);
}


greeting(greetingHandler, 'Kamal')
greeting(greetingHandler, 'Tom Hanks')
greeting(greetEvening, 'German Shepherd')
greeting(greetNight, 'Kali Baba')

function jamalKodu(){
  console.log('Hello')
}

document.getElementById('jamal').addEventListener('click', jamalKodu)

 */
/* function greeting(greet, name) {
  greet(name);
}

function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetEvening(name) {
  console.log("Good Evening", name);
}

function goodNight(name){
    console.log('Good night', name)
}

greeting(greetEvening, 'Eva Miles')
greeting(greetingHandler, "Tom Hanks");
greeting(greetingHandler, "Tom Brady");
greeting(goodNight, 'Gold Mia')
greeting(greetingHandler, "Tom Cruise");
greeting(greetEvening, 'Doll Bro');

 */
/* function submitHandler(){

}

document.getElementById('btn-submit').addEventListener('click', submitHandler) */

/* function calculate(num1, num2, operation){
    return operation(num1, num2)
}


function add(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}

console.log(calculate(3, 2, add))
console.log(calculate(3, 2, multiply)) */




function fetchData(callback){
     console.log('fetching Data...');
     setTimeout(() => {
      const data = {name: 'Jamal', age: 22};
      callback(data)
     },2000)
}

function displayData(data){
  console.log('Data fetched: ', data)
}
fetchData(displayData)