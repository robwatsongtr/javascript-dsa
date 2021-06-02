/* Radix Sort. Works exclusively with numbers.

  Exploits the fact that information about the size of a number
  is encoded in the number of digits. More digits means
  a bigger number.

  In order to implement Radix Sort we need some helper functions:

  getdigit(num, place)    
  
  returns the digit in num at the given place value, with 0 being 
  the ones place, 1 is the tens place, 2 is hundreds, etc.
                          

  Algo to get this:
    0. Abs value the number to handle negative numbers 
    1. Divide by the "place" (power of 10)
    2. Floor to get rid of decimal
    3. Modulo 10


*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; 
}