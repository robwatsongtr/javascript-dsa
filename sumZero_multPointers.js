
 // write a function called sumZero which accepts a sorted
 // array of integerds, the function finds the first pair 
 // where the sum is zero, and returns an array that includes
 // both values.

 // this solution uses the 'multiple pointers' method

 function sumZero(arr) {
   let left = 0;
   let right = arr.length -1;
   while(left < right) { //need this to avoid false positive 
     let sum = arr[left] + arr[right];
     if(sum === 0) {
       return [arr[left], arr[right]];
     } else if (sum > 0) {
       right--;
     } else {
       left++;
     }
   }
 }

 console.log( sumZero([-4,-3,-2,-1,0,1,2,3,]) ); // [ -3, -3 ]
 console.log( sumZero([-4,-3,-2,-1,0,5,10]) );  // undefined