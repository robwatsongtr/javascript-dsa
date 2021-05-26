// bubble sort:
// array is scanned from beginning if current value is larger than the value
// next to it, they are swapped, otherwise move on to next value.
// with each succesive pass through the array the largest values bubble to 
// the end. 

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

// 26 seconds, that's bad 
let arrInput = Array.from( { length: 100000 }, 
  () => Math.floor(Math.random() * 100000));

console.log( bubbleSort(arrInput) );