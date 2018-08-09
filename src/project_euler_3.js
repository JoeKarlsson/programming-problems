// A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Recursive Solution
// exports.largestPrimeFactor = function(n) {

//   var primeNumber = 0;

//   function find_highest_prime_factor(n) {
//       var max = Math.round(Math.sqrt(n));
//       for (var i = max; i >= 2; i--) {
//         if (n % i == 0 && find_highest_prime_factor(i) == 1) {
//           return i;
//         }
//       }
//       return 1;
//     }

//   primeNumber = find_highest_prime_factor(n);
//   return primeNumber;

// }

exports.largestPrimeFactor = function(n) {

  function isPrime(value) {
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  }

  var primeNumber = 0;

  function largestPrimeFact(n) {
    var i = 2
    while ( i <= n ) {
      if ( n % i === 0 ) {
        n /= i;
        if ( isPrime(i) ) {
          primeNumber = i;
        }
      }
      i++;
    }
    return primeNumber;
  }

  primeNumber = largestPrimeFact(n);
  return primeNumber;

}
