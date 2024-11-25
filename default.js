function add(num1 = 0, num2 = 0, num3 = 1){
    const result = num1 + num2 + num3;
    // console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 2);
const sum = add(5)
// const sum = add()
// console.log(sum)


function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full
}

console.log(fullName('Hridoy'))