/** 
 Print a single integer denoting the number of letter a's in the first letters of the infinite string created by repeating infinitely many times.

Sample Input 0

aba
10

Sample Output 0

7

 */
function repeatedString(s, n) {
  let count = 0;
  let reminderCount = 0;
  let remainder = n % s.length;

  for (let i = s.length; i-- > 0; ) {
    if (s.charAt(i) == "a") {
      ++count;

      if (i < remainder) ++reminderCount;
    }
  }

  return ((n - remainder) / s.length) * count + reminderCount;
}
