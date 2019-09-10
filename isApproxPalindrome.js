// Determine if a string of length S is a palindrome if you remove at most a single characters from that string.

//Best Case: O(1) & Worst Case: O(2N)
const isPalindromeIfNLettersAreRemoved = (
  str,
  maxNumbersOfLetters = 1,
  lettersRemoved = 0
) => {
  if (str.length === 0) {
    return true;
  }
  let result = isPalindrome(str);

  if (result.isPalindrome) {
    return true;
  }

  if (lettersRemoved >= maxNumbersOfLetters) {
    return false;
  }

  const { badIndex } = result;
  str = str.slice(0, badIndex) + str.slice(badIndex + 1);
  lettersRemoved++;

  return isPalindromeIfNLettersAreRemoved(
    str,
    maxNumbersOfLetters,
    lettersRemoved
  );
};

// O(1) Space & O(N) time
const isPalindrome = str => {
  const strArr = str.split("");
  const strLength = strArr.length;
  const halfLength = Math.ceil(strArr.length / 2);

  let result = {
    isPalindrome: true,
    badIndex: null
  };

  strArr.forEach((char, idx) => {
    const correspondingChar = strArr[strLength - 1 - idx];
    if (char !== correspondingChar) {
      result = {
        isPalindrome: false,
        badIndex: idx
      };
    }
  });

  return result;
};

const data = ["abca", "aba", "abcd", "acba", "", "racecafr"]; // true, true, false, true, true, true

data.forEach(testCase => {
  console.log(
    `isApproxPalindrome($(testCase))`,
    isPalindromeIfNLettersAreRemoved(testCase)
  );
});
