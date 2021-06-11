// Binary Search, Udemy Style 

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor( ( start + end) / 2); // avg and round    

  while( arr[middle] !== elem && start <= end)  {
    if ( elem < arr[middle]) end = middle - 1; // shift right pointer to where middle was before
    else start = middle + 1; // shift left pointer to where middle was before 
    middle = Math.floor( ( start + end) / 2); // recalculate middle 
  }
  // "Return the result of whole statement, either the element or -1 "
  return arr[middle] === elem ? middle : -1;  
} 


console.log(binarySearch( [1,2,3,4,5], 2 ));

console.log(binarySearch( [1,2,3,4,5], 3 ));

console.log(
  binarySearch( [5,6,10,12,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10 ));