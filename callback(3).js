function greeting(greet, name) {
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


/* function submitHandler(){

}

document.getElementById('btn-submit').addEventListener('click', submitHandler) */