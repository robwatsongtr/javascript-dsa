/* 
Write a function called isSubsequence which takes in two strings, and checks
whether the characters in the first string form a subsequence of the
characterds in the second string. 

In other words, the function should checkwhether the characters in the 
first string appear somewhere in the second string without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false, order matters
*/

// If the character at i is equal to character at j, i++
// If i hits the end of str2 

function isSubsequence (str1, str2) {
  let i = 0; 
  let j = 0;
  while(j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++
    console.log('i: ', i, ' j: ', j );
  }
  return false; 
}

console.log(isSubsequence('sing', 'sting')); // true 
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('abc', 'def')); // false