// selection sort scans the array for the smallest element
// and when found swaped to the front of the array. swapped to 
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
      // console.log(i,j); // second for loop shrinks by 1 
      if( arr[j] < arr[lowest] ){
        lowest = j;  
      }
    }
    console.log("********************")
    console.log(arr); 
    console.log("SWAPPING TO:"); 
    if ( i !== lowest) swap(arr, i, lowest);
    console.log(arr)
    console.log("********************")
  }
  return arr; 
}

console.log( selectionSort([34,22,10,19,17]) );

