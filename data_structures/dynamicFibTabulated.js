// fibonacci function Tabulated version. 
// builds a table(array) up until you reach n, then just
// return the nth index of the array. 
// O(n) time complexity.

function tabfib( n ) {

  var fibNums = [0, 1, 1];

  for( var i = 3; i <= n; i++ ) {
    fibNums[i] = fibNums[i -1] + fibNums[i-2];
  }

  console.log( fibNums ); // makes really cool output!

  return fibNums[n]; 

}

console.log( tabfib(99) );

