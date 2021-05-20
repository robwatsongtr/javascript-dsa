
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    // whatever i is is stored in a temp variable
    var currentVal = arr[i];  

    // start second loop at one less than what i is for comparison 
    // (compare to left of i)
    // As long as j (to the left) is larger and we havent reached the 
    // beginning of the array, iterate backwards
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // current val is saved, so "space is made" by copying the 
      // compared value one place to the right 
      arr[j+1] = arr[j]; 
    }

    // the insertion is one to the right of the last comparison
    arr[j+1] = currentVal; 
    // console.log(arr);
  }
  return arr;  
}


console.log( insertionSort([2,1,9,76,4]) );