// full Quicksort code

function pivot( arr, start = 0 , end = arr.length + 1 ) {
  function swap( arr, idx1, idx2 ) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
  }

   let pivot = arr[start];
   let swapIdx = start;

  for( let i = start + 1; i < arr.length; i++ ) {
    if( pivot > arr[i] ) {
      swapIdx++;
      swap( arr, swapIdx, i  );
    }
  }
  swap( arr, start, swapIdx )
  // console.log(arr);
  return swapIdx; 
}

function quickSort( arr, left = 0, right = arr.length - 1 ) {
  // wrapper if statement is the base case, 
  if( left < right ) {
    // cement the place of the first pivot, which is arr[0]
    let pivotIndex = pivot( arr, left, right );

    // recursively sort from 'left' to one less than the pivot index
    quickSort( arr, left, pivotIndex - 1 );

    // recursively sort from one more than the pivot index to the 'right' 
    quickSort( arr, pivotIndex + 1, right );
  }
  return arr; 
}

// roughly 3 seconds. Not bad. 
let arrInput = Array.from( { length: 100000 }, 
  () => Math.floor(Math.random() * 100000) );

console.log( quickSort(arrInput) );