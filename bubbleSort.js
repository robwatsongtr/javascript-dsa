// bubble sort 


function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp; 
}

function bubbleSort(arr) {
  for( var i = arr.length; i > 0; i-- ) {
    for( var j = 0; j < i - 1; j++) {
      console.log(arr);
      if( arr[j] > arr[j+1]) {
        swap(arr, j, j + 1);
      }
    }
    console.log("one pass complete");
  }
  return arr; 
}

console.log( bubbleSort([37,45,29,8,16,12]) );