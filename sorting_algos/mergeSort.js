
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while( i < arr1.length && j < arr2.length ) {
    if( arr1[i] < arr2[j] ) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++; 
    }
  }

  while( i < arr1.length ) {
    result.push(arr1[i]);
      i++;
  }

  while( j < arr2.length ) {
    result.push(arr2[j]);
      j++;
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

let arrInput = Array.from( { length: 1000000 }, 
  () => Math.floor(Math.random() * 1000000) );

console.log( mergeSort( arrInput ) ); 