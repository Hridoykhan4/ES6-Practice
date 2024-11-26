/* const newArray = [];
const newFriends = friends =>  {
    for (const friend of friends) {
        if(friend.length % 2 === 0){
            newArray.push(friend);
        }
    }
    return newArray
}


const friends = ['Jamal', 'Kamal', 'Lalala', 'Dalal', 'Kakala', 'Jamala'];
console.log(newFriends(friends)) */

/* 
Square each element of the array.
Calculate the sum of the squared elements.
Return the average of these squared elements.
*/
/* const avgSum = arr => {
    const elementSquare = [];
    for (const element of arr) {
        elementSquare.push(element * element);
    }
    let sum = 0;
    for (const element of elementSquare) {
        sum += element;
    }
    return sum / elementSquare.length
} */

// console.log(avgSum([2, 3, 4, 5]))


const getMax = (firstArray, secondArray) => {
    const newArray = [...firstArray, ...secondArray];
    let max =  newArray[0];
    for (const element of newArray) {
        if(element > max){
            max = element;
        }
    }
    return max
}

const arr1 = [2,3,4,15];
const arr2 = [5,6,7,8];

console.log(getMax(arr1, arr2));