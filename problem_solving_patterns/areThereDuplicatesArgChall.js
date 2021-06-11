/*
Implement a function called areThereDuplicates which accepts a variable
number of arguments, and checks whether there are any duplicates among
the arguments passed in. You can use either the frequency counter pattern
or the multiple pointers pattern.

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
*/
/* 
IMPORTANT!: JS functions have a built in object called the 
arguments object. The argument object contains an array of the 
arguments used when the function was called(invoked).
*/

function areThereDuplicates() {
  // convert arguments list into an array
  let args = [...arguments];

  // make a frequency counter object from the argumets array
  let freqCounterArgs = {}

  // for of is used to iterate over arrays typicallty
  for(let val of args) {
    freqCounterArgs[val] = (freqCounterArgs[val] || 0) + 1; 
  }

  // for in is used to iterate over objects  
  for(let key in freqCounterArgs){
    if( freqCounterArgs[key] > 1 ) return true; 
  } 
  return false;
}



console.log(areThereDuplicates(12, 45, 2345, 'a', 'sdf')); // false
console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true