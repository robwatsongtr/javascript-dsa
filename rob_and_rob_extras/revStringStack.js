// reverse a string using a stack, just for fun
// by Rob Watson 

const revStringStack = (str) => {
  let stack = [];
  let result = [];
  let currentLetter; 

  // push it, fill the stack with letters 
  for( let i = 0; i < str.length; i++ ) {
    stack.push( str[i] ); 
  }

  // pop it 
  while( stack.length ) {
    currentLetter = stack.pop(); // pop a letter
    result.push( currentLetter ); // push the letter into result array
  }

  let resultString = result.join(''); // back to a string without commas 
  return resultString; 

}


console.log( revStringStack('Robert') ) // treboR
console.log( revStringStack('abcdefg') ) // gfedcba

// Robert's one-liner: 

// result = ""; for (let i = st.length - 1; i >= 0; i++) { result.concat(st[i]) }