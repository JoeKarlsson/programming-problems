// Prime Numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...

function PrimeFinder(maxPrime) {
  primes = [];

  primes[0] = 2;
  primes[1] = 3;

  primeCount = 2; //2, and 3 are already listed as init primes

  //Keep checking prime numbers until maxPrime is found
  while (primeCount < maxPrime) {
    isPrime = false; // Tracks if the current candidate is prime or not
    candidate = primes[primeCount - 1] + 2; //contains variable that needs to be checked if it's prime or not

    // While isPrime is false
    while (!isPrime) {
      isPrime = true;
      for (var pindex = 0; pindex < primeCount; pindex++) {
        prime = primes[pindex];
        if (candidate % prime == 0) {
          isPrime = false;
          break;
        }
      }
      if (!isPrime) {
        candidate += 2;
      } else {
        primes[primeCount] = candidate;
        primeCount++;
      }
    }
  }
  console.log( 'Solution: ' + primes[maxPrime - 1] ); // soultion is 104743
}

PrimeFinder(10001);
