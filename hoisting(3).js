for(let i = 0; i < 5; i++){
    // console.log(i);
}
// console.log('outside',i);
print5()




// Evabe declare korle full function Ta k ekdm upore niye jay
function print5(){
    // console.log('inside print5',5)
}
// Cannot access 'print10' before initialization
print10()

const print10 = () => console.log('Inside print10', 10);