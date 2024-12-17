// '', 0, undefined, null, false
//'0', ' ', 'true', [] ,{}

let myVar = 5;
if(myVar){
    myVar = myVar * 100
}
else{
    myVar = 0
}

console.log(myVar)


// const money = 200;
// let drink = (money > 100 && myVar > 100 ) ? 'Coke' : 'Water';
// console.log(drink)

// const food = money > 100 ? 'Birani' : 'Cha'
// console.log(food)


// let food;
// if(money > 100){
//     food = 'Birani'
// }else{
//     food = 'Cha Biscut'
// }

// console.log(food)

const num1 = 52;
// console.log(num1 + '')
// console.log(num1.toString())


// New Babe
const input = '550';
const inputNum = +input;
// console.log(inputNum)


let isActive = false;
isActive = !isActive //toggle Booean

const showUser = () => console.log("Display")
const hideUser = () => console.log('Hide');

// isActive ? showUser() : hideUser()

// isActive && showUser()

// isActive || hideUser()