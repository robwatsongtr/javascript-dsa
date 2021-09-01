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

class HashTable {
  constructor( size = 53 ){
    this.keyMap = new Array(size);
  }

  _hash( key ) {

    let total = 0;
    let hash; 
    let WEIRD_PRIME = 31; 

    // Whichever is smaller, key length or 100, becomes the string length. 
    // so we avoid the time complexity growing linearly for str length 
    for( let i = 0; i < Math.min( key.length, 100 ); i++ ) {

      // grab each charater per iteration 
      let char = key[i]; 

      // map 'a' to 1, 'b' to 2, 'c' to 3, etc
      let value = char.charCodeAt(0) - 96;

      // keep a running total of the char code value modulo'ed by array length 
      // also added in a prime number multiplier to mix things up 
      total = ( total * WEIRD_PRIME + value ) % this.keyMap.length;

    } 

    hash = total; // I'm a stickler for naming I suppose
    return hash; 

  }

  // Accepts a key and value
  // Hashes the key
  // Stores the key-value pair in the hash table array via separate chaining.
  set(key, value) {

  }

}