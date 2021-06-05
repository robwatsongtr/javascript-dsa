// selection sort scans the array for the smallest element
// and when found swaped to the front of the array, swapped to 
// the next unsorted index
// 

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp; 
}

function selectionSort(arr) {
  for( let i = 0; i < arr.length; i++) {
    var lowest = i; 
    for( let j = i+1; j < arr.length; j++) { 
      if( arr[j] < arr[lowest] ){
        lowest = j;  
      }
    }
    if ( i !== lowest) {
      swap(arr, i, lowest);
    } 
  }
  return arr; 
}

// 9 seconds 
let arrInput = Array.from( { length: 100000 }, 
  () => Math.floor(Math.random() * 100000));

console.log( selectionSort( arrInput ) );

