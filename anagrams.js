// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// Source: https://www.hackerrank.com/challenges/ctci-making-anagrams

const mapArray = (testArr) => {
  const keyCount = {};

  testArr.forEach((arrayItem) => {
    if (arrayItem in keyCount) {
      keyCount[arrayItem]++;
    } else {
      keyCount[arrayItem] = 1;
    }
  });

  return keyCount;
};

const numbersRequiredToDeleteFromBothStrings = (strs) => {
  const str1 = strs[0].toLowerCase().split("");
  const str2 = strs[1].toLowerCase().split("");
  const obj1 = mapArray(str1);
  const obj2 = mapArray(str2);

  let matchCount = 0;
  for (let key in obj1) {
    if (key in obj2) {
      let matches = 0;
      if (obj1[key] === obj2[key]) {
        matches = 2 * obj1[key];
      } else {
        matches = obj1[key] > obj2[key] ? obj2[key] : obj1[key];
      }
      matchCount += matches;
    }
  }
  return str1.length + str2.length - matchCount;
};

const test1 = ["abc", "cde"];
const result = numbersRequiredToDeleteFromBothStrings(test1); // 4

console.log("result", result);
