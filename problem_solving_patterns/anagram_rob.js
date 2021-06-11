// anagram.js rob watson 'solution'

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  // create two counter objects
  let freqCountStr1 = {}
  let freqCountStr2 = {}
  for(let val of str1) {
    freqCountStr1[val] = (freqCountStr1[val] || 0) + 1;
  }
  for(let val of str2) {
    freqCountStr2[val] = (freqCountStr2[val] || 0) + 1; 
  }

  // check for same letter, and also same frequency in counter objects. 
  for(let key in freqCountStr1) {
    if( !(key in freqCountStr2) ) {
      return false; // same letter
    }
    if( freqCountStr2[key] !== freqCountStr1[key] ) {
      return false; // same frequency 
    }
  }
  return true; 
}

console.log( isAnagram('qwerty', 'qeywrt') ); // true 
console.log( isAnagram('aabbccdd', 'ddccaabb') ); // true
console.log( isAnagram('aabbccdd', 'ddccaabbb') ); // false

