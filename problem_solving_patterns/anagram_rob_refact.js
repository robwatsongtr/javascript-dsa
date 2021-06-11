// anagram.js rob watson refactor
// Property of an anagram is that there are the same number AND
// same frequency of characters 

function makeFrequencyObj(str) {
  let freqCount = {}
  for(let val of str) {
    freqCount[val] = (freqCount[val] || 0) + 1; 
  }
  return freqCount; 
}

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) { return false; }

  let freqCountStr1 = makeFrequencyObj(str1);
  let freqCountStr2 = makeFrequencyObj(str2);

  for(let key in freqCountStr1) {
    if( !(key in freqCountStr2) ) {
      return false; // not same letters
    }
    if( freqCountStr2[key] !== freqCountStr1[key] ) {
      return false; // not same frequency 
    }
  }
  return true; 
}

console.log( validAnagram('qwerty', 'qeywrt') ); // true 
console.log( validAnagram('aabbccdd', 'ddccaabb') ); // true
console.log( validAnagram('aabbccdd', 'ddccaabbb') ); // false

