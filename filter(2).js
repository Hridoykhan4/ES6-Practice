const numbers = [3, 4, 6, 7, 2];
const players = [76, 88, 33, 65, 55, 64];
// const selected = players.filter(p => p > 90);
// console.log(selected)

// If I want to select the odd ones
const selected = players.filter(n => n % 2 === 1);
// console.log(selected)

const friends = ['Tom', 'John', 'Michael', 'Luke'];
const friendsOdd = friends.filter(n => n.length % 2 === 1);
console.log(friendsOdd)