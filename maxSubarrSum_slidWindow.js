function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) return null; // edge case 

  // add the first n digits together in array
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
    // console.log(maxSum);
  } 
  tempSum = maxSum;

  // now start a loop from num in from beginning,
  // and subtract the number from the left of windown and add the 
  // number on the right of the window. 
  for(let i = num; i < arr.length; i++) {
    tempSum = tempSum - (arr[i - num]) + (arr[i]);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;

}

console.log( maxSubarraySum([2,6,9,2,1,8,5,6,3],3) )