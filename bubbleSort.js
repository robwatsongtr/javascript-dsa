// bubble sort 
// noSwaps is the optimizaiton for a nearly sorted array,
// it allows for nearly O(n) if the array is nearly sorted. 

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp; 
}

function bubbleSort(arr) {
  var noSwaps; 
  for( var i = arr.length; i > 0; i-- ) {
    noSwaps = true; 
    for( var j = 0; j < i - 1; j++) {
      // console.log(arr);
      if( arr[j] > arr[j+1]) {
        swap(arr, j, j + 1);
        noSwaps = false; 
      }
    }
    if(noSwaps) break; 
    // console.log("one pass complete");
  }
  return arr; 
}

console.log( bubbleSort([8,1,2,3,4,5,6,7]) );