/*
  [14 March 2018]
  Day 1: Making a modulus function
*/

function modulus(a, b) {
  if (b == 0 || isNaN(a) || isNaN(b)) return NaN;

  var positive = a >= 0
  a = Math.abs(a)
  b = Math.abs(b)

  while (a >= b) {
    a = a - b
  }

  return positive ? a : -a
}

console.log('Actual result:\t\t' + (-21 % 5) + '\nFunction result:\t' + modulus(-21, 5))
