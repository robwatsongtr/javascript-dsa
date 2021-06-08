// Write a function called power which accepts a base
// and an exponent. The function should return the power
// of the base to the exponent.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp-1);
}

console.log( power(3,4) );