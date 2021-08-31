// Hash funcionts, hash tables, etc.

/*

To implement a hash table, we will use an array.

In order to look up values by key, we need a way to convert keys into
valid array indicies.

A function that performes this task is called a hash function.

A hash function takes data of a variable size, and then spits out (maps)
data of a fixed size. 

What makes a good hash?
1. Fast (constant time)
2. Doesn't cluster outputs at specific indicies, but distributes uniformly.
3. Deterministic, ie same input yields same output.

A main way of preventing collisions is to use prime numbers, in that if the size
of your table / array is a prime number collisions are greatly reduced, by orders
of magnitude.

Handling collisions::

1. Separate chaining:

In this method, a collision causes a nested datastrucutre to be created, so if two 
items are to be stored at index 4 of an array,the first item is stored there,
then the second item is also stored there as an array at that array index, and to 
retrieve the get func would loop at that index to find the correct value.

2. Linear probing:

When there is a collision we search through the array to find the next empty.
Downside is that you can fill up slots in the table quickly, then you have to 
figure out how to deal with that situation. 

*/

//-------------------------------------------------------------------------------

// basic hash function using strings:

// eg: 
// hash("pink", 100) -> this will map the string 'pink' to be a number 
// between zero and 100.

// a decent way to do this is to use the underlying UTF character code
// for each character in the string. If you subtract 96 from the char
// code you get the position in the alphabet. We can take each character's
// numeric position and add them together. 

// then you can take that total and MODULO by the LENGTH of the array 
// and voila, you have a basic hash function for strings. 

// here's an example of a simple hash function for strings: 

function simpleHash(key, arrLen) {
  let total = 0;
  let hash; 

  for( let char of key ) {

    // map 'a' to 1, 'b' to 2, 'c' to 3, etc
    let value = char.charCodeAt(0) - 96;

    // keep a running total of the char code value modulo'ed by array length 
    total = ( total + value ) % arrLen; 

  }

  hash = total; 

  return hash; 

}

console.log( simpleHash("blue", 10) );
console.log( simpleHash("green", 10) );
console.log( simpleHash("sdifjdfsd", 10) );
console.log( simpleHash("12dfbsd", 10) );
console.log( simpleHash("mohagan", 10) );
