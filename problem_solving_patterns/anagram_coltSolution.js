// anagram colt steele solution 

function validAnagram(first, second) {
  if(first.length !== second.length) { return false }

  const lookup = {};

  // loop through first string and create a breakdown of the string
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  // loop over second string and compare each charater to lookup object 
  // subtract out occurences to test same number of letter 
  for(let i = 0; i < second.length; i++) {
    let letter = second[i];
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1; 
    }
  }
  return true
}

console.log( validAnagram('qwerty', 'qeywrt') ); // true 
console.log( validAnagram('aabbccdd', 'ddccaabb') ); // true
console.log( validAnagram('aabbccdd', 'ddccaabbb') ); // false