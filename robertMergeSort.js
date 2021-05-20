function merge(arr1, arr2) {
  let result = [];

  while( arr1.length || arr2.length ) {
    if( arr1.length ) {
        if (arr2.length && arr2[0] < arr1[0]) {
            result.push(arr2.shift());
        } else {
            result.push(arr1.shift());
        }
    } else {
      result.push(arr2.shift());
    }
  } 
  return result; 
}

function mergeSort(arr) {
  //base case 
  if(arr.length <= 1) return arr; 

  // recursively slice the array into halves and halves of halves... 
  let mid = Math.floor( arr.length / 2 )
  let left = mergeSort( arr.slice(0,mid) );
  let right = mergeSort( arr.slice(mid) );

  // merge it all back together  
  return merge(left, right);

}

console.log( mergeSort([10,24,73,76]) )