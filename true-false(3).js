// Jehutu x false tai x is falsy te jabe,,,

/* 
Truthy..
1 . true hoile truthy
2. Any number (+ve, -ve) will be truthy except 0
3. Any string will be truthy except empty string
4. '0', 'false' (covered by string)
5 . {} (Empty object is a truthy)
Falsy...
1. false
2. 0
3. ''(Empty string)
4. undefined
5. null
*/

// This gonna be falsy
// const x = 0;

// if(x){
//     console.log('x is truthy')
// }
// else{
//     console.log('x is falsy')
// }

/* const x = '';

if(x){
    console.log('x is truthy')
}
else{
    console.log('x is falsy')
} */


// Empty array, object is also truthy
/* let x = [];

if (x) {
  console.log("x is truthy");
} else {
  console.log("x is falsy");
}
 */



// Check falsy
// let y = '';

// if(!y){
//     console.log('Okay, thik hai')
// }
// else{
//     console.log('Nahi hai Thik')
// }

// Check truthy .... !z makes the value of z which is truthy into false, Using double bang makes it truthy again
/* let z = 50;
if(!!z){
    console.log('Value is truthy')
}
else{
    console.log('')
} */

/* const x = null; //Null is a falsy
if(!x){ // !x stands for not truthy,i.e. falsy ...There it goes inside the condition
    console.log('Value is falsy')
} */


/* const ac = false;
if(!ac){
    console.log('Hello')
}
else{
    console.log('Khela shundor')
}
 */

function showMessage(callback, name){
    callback(name);
}

function message(known){
    console.log('Good Morning', known);
}

showMessage(message, 'KalaMia')