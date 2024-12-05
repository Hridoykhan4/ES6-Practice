/* function sum(a, b, c) {
    // console.log(arguments)
   

    const args = [...arguments];
    // console.log(args)

  const result = a + b + c;
  return result;
}
const total = sum(43, 11, 44, 5, 22, 55, 12, 54);
// console.log(total)

console.log(typeof sum.length) */

/* 
function sum(a, b, c){
  return [...arguments]
}

const total = sum(2,3,4);
console.log(sum.length) */

function filterStrings(){
  const args = [...arguments];
  return args.filter(n => typeof n === 'string')
}


console.log(filterStrings(1, 'hello', true, 'world', 42));