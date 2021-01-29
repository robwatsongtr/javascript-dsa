// refactored solution, O(2n)
// instead of looping over the first array, then looping over 
// second array checking for each value (sub loop)
// loop over each array just once, *indivdually*

function same2(arr1, arr2) {
  if(arr1.length !== arr2.length) { return false; }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)) {
          return false; 
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
          return false;
      }
  }
  return true; 
}

console.log( same2( [1,2,3,2], [9,1,4,4] ) );