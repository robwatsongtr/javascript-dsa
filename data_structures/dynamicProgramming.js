/*

What is Dynamic Programming?

It is a method for solving a complex problem by breaking it down
into a _collection_ of simpler subproblems, solving each of those 
subproblems _just once_, and storing their solutions. 

In other words, remember old values and come back to them when needed. 

It only works on problems with
-Optimal Substructure &
-Overlapping Subproblems

_Overlapping Subproblems are problems that can be broken down
into subproblems _which are reused several times_
For example, calculating a fibonacci number involves overlapping
subproblems, but merge sort almost always does not have any overlapping 
subproblems. 

_Optimal Substructure is when an optimal solution can be
constructed from optimal solutions of its subproblems. 
The optimal solutions of the subproblems can be chained together 
to get the optimal solution of the entire problem. 

*/

// non memoized fib. O(2^n) time complexity because creates an
// exponential recursion tree.

function fib(n) {
  if( n <= 2) return 1; // base case
  return fib( n-1 ) + fib( n - 2);
}

// memoized fib. fib(n) is stored in n'th index of an array for retrieval. 

function memoFib( n, memo = [] ) {

  // if solution to fib of n already found, just return that
  if( memo[n] !== undefined ) return memo[n];

  if( n <= 2 ) return 1; // base case

  // each fib call is done and stored in the memo array
  var result = fib( n-1, memo ) + fib( n-2, memo );

  memo[n] = result; 

  return result; 

}

console.log( fib(10) );
console.log( memoFib(10) );