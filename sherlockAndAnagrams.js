/**
 * 
 Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example s = mom, the list of all anagrammatic pairs is [m,m], [mo,om] at positions [[0],[2]], [[0],[1], [1,2]] respectively.

 Output Format

For each query, return the number of unordered anagrammatic pairs.

Sample Input 0

2
abba
abcd

Sample Output 0

4
0

 * 
 */

function sherlockAndAnagrams(s) {
  let anagrams = 0;

  for (let x = 1; x < s.length + 1; x++) {
    const stringMap = {};

    for (let y = 0; y < s.length - x + 1; y++) {
      const string = s
        .substring(y, y + x)
        .split("")
        .sort()
        .join("");
      stringMap[string] = (stringMap[string] || 0) + 1;
    }
    console.log(stringMap);

    Object.values(stringMap).forEach((value) => {
      anagrams += (value * (value - 1)) / 2;
    });
  }
  return anagrams;
}

console.log(sherlockAndAnagrams("abba")); // 4
// console.log(sherlockAndAnagrams("abcd")); // 0
// console.log(sherlockAndAnagrams("kkkk")); // 10
