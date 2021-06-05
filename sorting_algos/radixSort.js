/* 
  Radix Sort. Works exclusively with numbers.

  Exploits the fact that information about the size of a number
  is encoded in the number of digits. More digits means
  a bigger number.

  In order to implement Radix Sort we need some helper functions:

  --- getdigit(num, place)    
  
  returns the digit in num at the given place value, with 0 being 
  the ones place, 1 is the tens place, 2 is hundreds, etc.
                          
  Algo to get this:
  0. Abs value the number to handle negative numbers 
  1. Divide by the "place" (power of 10)
  2. Floor to get rid of decimal
  3. Modulo 10

  --- digitCount(num)  

  returns the number of digits in num

  Algo to do this:
  0. abs the number 
  1. Take the base 10 log of the number.
  2. Floor to round
  3. Add 1, because places are 0 indexed 

  -- mostDigits(nums)

  Given an array of numbers, returns the number of digits of the largest 
  Numbers in the list.

  Algo to do this:
  1. Run digitCount on each number in list(array)
  2. Keep a running tally of the largest (maximum)
  3. When all the numbers in list are looked at, return maximum value 
*/

// Helper Functions----------------------------------------------------------------

// returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; 
}

// returns the number of digits in num
function digitCount(num) {
  if ( num == 0 ) return 1;
  return Math.floor( Math.log10(Math.abs(num)) ) + 1; 
}

// Given an array of numbers, returns the number of digits of the largest number
function mostDigits(numsArr) {
  let count = 0;

  // Math.max will compare the current count to the next sub in array each iteration
  for( let i = 0; i < numsArr.length; i++ ) {
    count = Math.max( count, digitCount(numsArr[i]) );
  }
  return count; 
}

// Radix Sort algorithm ----------------------------------------------------------

function radixSort(numsArr) {
  let maxDigitCount = mostDigits(numsArr);

  // number of digits of the largest number is how long the outer loop runs
  for( let k = 0; k < maxDigitCount; k++ ) {

    // create a two dimensional array where the one row is the array of buckets
    // and each bucket (column) is an empty array
    let digitBuckets = Array.from( {length: 10}, () =>[] );

    // loop over every digit in numsArr and put each number in the proper bucket
    // according to digit 
    for( let i = 0; i < numsArr.length; i++) {
      let digit = getDigit( numsArr[i], k );
      digitBuckets[digit].push( numsArr[i] );
    }
     
    // remake the main array by concatting all the values in digitBuckets
    // spread operator makes sure the values get taken out of the arrays properly
    numsArr = [].concat(...digitBuckets);
  }
  return numsArr; 
}

// very fast on 100,000 numbers 
let arrInput = Array.from( { length: 100000 }, 
  () => Math.floor(Math.random() * 100000) );

console.log( radixSort( arrInput ) ); 