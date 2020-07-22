/**
Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string. 

Output Format

For each query, print the minimum number of deletions required on a new line.

Sample Input

5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Sample Output

3
4
0
0
4

 */

const alternatingCharacters = (s) => {
  let count = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const currChar = s.charAt(i);
    const nextChar = s.charAt(i + 1);
    if (currChar === nextChar) {
      count++;
    }
  }
  return count;
};

console.log(alternatingCharacters("AAAA")); // A___ = 3 Deletions
console.log(alternatingCharacters("BBBBB")); // B____ = 4 Deletions
console.log(alternatingCharacters("ABABABAB")); // ABABABAB = 0 Deletions
console.log(alternatingCharacters("BABABA")); // BABABA = 0 Deletions
console.log(alternatingCharacters("AAABBB")); // A__B__ = 4 Deletions
