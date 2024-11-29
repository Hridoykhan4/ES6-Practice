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

let x;

if (x) {
  console.log("x is truthy");
} else {
  console.log("x is falsy");
}
