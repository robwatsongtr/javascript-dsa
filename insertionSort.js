
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var currentVal = arr[i]; // whatever i is is stored in a temp variable 
    // start second loop at one less than what i is for comparison 
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]; // this is the magic, it creates "space" for the insertion
    }
    arr[j+1] = currentVal; // the insertion is one to the right of the last comparison
    console.log(arr);
  }
  return arr;  
}


console.log( insertionSort([2,1,9,76,4]) );