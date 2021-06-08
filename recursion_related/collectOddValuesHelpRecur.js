
function collectOddVaues(arr) {

   let result = []

    // the array shrinks itself until its empty (base case)
    function helper(helperInput) {
        // base case
        if(helperInput.length === 0) {
            return;  
        }
        // if odd, push on to result array, otherwise, next statement 
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        // call the function on itself, minus the first element
        helper(helperInput.slice(1))
    }

    // call recursive helper function
    helper(arr)

    return result; 
}

console.log( collectOddVaues([1,2,3,4,5,6,7,8,9,10,11]) )