// In order to implement merge sort, first implement a function 
// responsible for arranging elements in an array on _either side of a pivot_

// Given an array this helper function should designate an element 
// as the pivot.

// The runtime of quick sort depends in part on how one selects the pivot:
// Ideally, the pivot should be chosen so that it's roughly the MEDIAN VALUE 
// in the data set you're sorting. 

// For simplicity, choose the pivot to be the first element.

// It should then rearrange elements in the array so that all values LESS THAN 
// the pivot are moved to the LEFT of the pivot, and all values GREATER
// than the pivot are moved to the RIGHT of the pivot. 



function pivot(arr, start = 0 , end = arr.length + 1) {
  function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
  }

   let pivot = arr[start];
   let swapIdx = start;

  for(let i = start + 1; i < arr.length; i++) {
    if( pivot > arr[i] ) {
      swapIdx++;
      swap( arr, swapIdx, i  );
    }
  }
  swap( arr, start, swapIdx)
  console.log(arr);
  return swapIdx; 
}

console.log( pivot([4,8,2,1,5,7,6,3]) );