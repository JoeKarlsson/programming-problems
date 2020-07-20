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

const findAllSubStrings = (s) => {
  let allSubStrings = [];

  // Loop through all of the substrings of s O(n^2)
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      allSubStrings.push(s.slice(i, j));
    }
  }
  return allSubStrings;
};

const duplicatesInArr = (arr) => {
  arr.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  return counts;
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
reverseString("hello");

function sherlockAndAnagrams(s) {
  let subStrings = {};
  let result = 0;

  // Loop through all of the substrings of s O(n^2)
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const subString = s.slice(i, j);
      if (!(subString in subStrings)) {
        subStrings[subString] = 1;
        // check if the revese has been added yet
        const reverseSubStr = reverseString(subString);

        if (
          reverseSubStr.length > 1 &&
          reverseSubStr.length < s.length &&
          reverseSubStr in subStrings
        ) {
          subStrings[subString]++;
        }
      } else {
        // substring already in chache
        subStrings[subString]++;
      }
    }
  }
  console.log(subStrings);
  return result;
}

// console.log(sherlockAndAnagrams("abba")); // 4
// console.log(sherlockAndAnagrams("abcd")); // 0
console.log(sherlockAndAnagrams("kkkk")); // 10
