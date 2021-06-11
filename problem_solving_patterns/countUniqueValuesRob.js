// Implement a function called countUniqueValues
// which accepts a sorted array of positive or negative 
// numbers, and counts the unique values in the array.  


function countUniqueValues(arr) {
  if(arr.length === 0) return 0; // otherwise will return 1 if empty array
  let left = 0;
  for(var right = 1; right < arr.length; right++) {
    if(arr[left] !== arr[right]) { // if unique,
      left++; // increment left,
      arr[left] = arr[right]; // copy the value to current left position to build unique array
                            
    }
  }
  return left + 1; // number of unique values is the left index plus 1 
}

console.log( countUniqueValues([-2 ,-1,-1,0,1]) );