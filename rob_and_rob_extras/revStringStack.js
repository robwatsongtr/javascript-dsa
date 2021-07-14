// reverse a string using a stack, just for fun
// by Rob Watson 

const revStringStack = (str) => {
  let splitString = str.split("");

  let stack = [];
  let result = [];
  let currentLetter; 

  // push it
  for( let i = 0; i < str.length; i++ ) {
    stack.push( str[i] );
  }

  // pop it 
  while( stack.length ) {
    currentLetter = stack.pop();
    result.push( currentLetter );
  }

  return result; 
}


console.log( revStringStack("Robert") ) // treboR
console.log( revStringStack('abcdefg') ) // gfedcba