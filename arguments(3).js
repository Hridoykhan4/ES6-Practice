function sum(a, b, c) {
    // console.log(arguments)
   

    const args = [...arguments];
    // console.log(args)

  const result = a + b + c;
  return result;
}
const total = sum(43, 11, 44, 5, 22, 55, 12, 54);
// console.log(total)

console.log(typeof sum.length)