/* 
Write a function called averagePair. Given a sorted array of integers
and a target average, determine if there is a pair of values in 
the array where the average of the pair equals the target average.

There may be more than one pair that matches the average target.

Sample input:

averagePair([1,2,3], 2.5) // true 
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([], 4) // false 
*/

function averagePair(arr, avg) {
  let leftPtr = 0; // left pointer beginning of array
  let rightPtr = arr.length - 1; // right pointer end of array
  while(leftPtr < rightPtr) {
    let ptrAvg = (arr[leftPtr] + arr[rightPtr]) / 2; 
    // if the pointer averages are above the entered average,
    // decrement the right pointer, otherwise (less than) increment
    // left pointer 
    if(ptrAvg === avg ) {
      return true; 
    } else if (ptrAvg > avg) {
      rightPtr--;
    } else  {
      leftPtr++;
    }
  }
  return false; 
}

console.log( averagePair([1,2,3], 2.5) )
console.log( averagePair([1,3,3,5,6,7,10,12,19], 8) )
console.log( averagePair([-1,0,3,4,5,6], 4.1) )
console.log( averagePair([], 4) )