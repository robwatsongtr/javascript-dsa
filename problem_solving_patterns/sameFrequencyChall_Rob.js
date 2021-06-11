
// Algo and Data Structures Mastercllass Prob Solving Patterns
// Optional Challenge, "frequency counter pattern"

// Write a function called sameFrequency. Given two positive integers, find 
// out if the two numbers have the same frequency of digits.

// Solution must be O(n)

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false 

function sameFrequency(num1, num2) {
  // take care of basic edge case (input not a number)
  if( isNaN(num1) || isNaN(num2) ) return false;
  
  // convert digits into arrays
  const num1arr = Array.from(String(num1), Number);
  const num2arr = Array.from(String(num2), Number);

  if(num1arr.length != num2arr.length) return false; // diff length can't be true 

  let freqCountNum1 = {};
  let freqCountNum2 = {};

  // make frequency counters 
  for(let val of num1arr) {
    freqCountNum1[val] = (freqCountNum1[val] || 0) + 1; 
  }
  for(let val of num2arr) {
    freqCountNum2[val] = (freqCountNum2[val] || 0) + 1;
  }

  console.log(freqCountNum1);
  console.log(freqCountNum2);

  // check for same number and also same frequency in counter objects 
  for(let key in freqCountNum1) {
    if( !(key in freqCountNum2) ) return false; // not same numbers 
    if( freqCountNum2[key] !== freqCountNum1[key] ) return false; // not same freq
  }
  return true; 
}

//console.log( sameFrequency(182, 281) );
//console.log( sameFrequency(34, 14) );
console.log( sameFrequency(3589578, 5879385) );
//console.log( sameFrequency(22, 222) );
