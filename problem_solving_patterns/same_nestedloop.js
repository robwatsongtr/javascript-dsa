// same:
// accepts two arrays, the function returns true if:
//  a. Every value in array1 has its (corresponding value squared) in array 2
//  b. The frequency of the values is the same. 

// Naive solution: O(n2):  
function same1(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  for(let i = 0; i < arr1.length; i++){
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if(correctIndex === -1) {
          return false;
      }
      console.log(arr2);
      arr2.splice(correctIndex,1)
  }
  return true;
}

console.log( same1([1,2,3,2], [9,1,4,4]) );





