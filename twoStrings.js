/**
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring a. The words "be" and "cat" do not share a substring.

Function Description
Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

twoStrings has the following parameter(s):

    s1, s2: two strings to analyze .

Input Format

The first line contains a single integer i,


Output Format
For each pair of strings, return YES or NO.

Sample Input
2
hello
world
hi
world

Sample Output
YES
NO
**/

const twoString = (s1, s2) => {
  const subStringCache = {};
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  let subStringExists = "NO";

  // Build up cache for s1 O(n)
  arr1.forEach((letter) => {
    if (!(letter in subStringCache)) {
      subStringCache[letter] = true;
    }
  });

  // check if str2 is in the cache?
  arr2.forEach((letter) => {
    if (letter in subStringCache) {
      subStringExists = "YES";
      break;
    }
  });
  return subStringExists;
};

// Examples
console.log('twoString("hello", "world")', twoString("hello", "world")); // YES
console.log('twoString("hi", "world")', twoString("hi", "world")); // NO
