// Determine if a string of length S is a palindrome if you remove at most a single characters from that string.

//Best Case: O(1) & Worst Case: O(2N)
const isApproxPalindrome = (str, calledOnce = false) => {
  if (str.length === 0) {
    return true;
  }
  let result = isPalindrome(str);

  if (result.isPalindrome) {
    return true;
  }

  if (calledOnce) {
    return false;
  }

  const { badIndex } = result;
  str = str.slice(0, badIndex) + str.slice(badIndex + 1);

  return isApproxPalindrome(str, true);
};

// O(1) Space & O(N) time
const isPalindrome = str => {
  const strArr = str.split("");
  const strLength = str.length;
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

const data = ["abca", "aba", "abcd", "acba", ""]; // true, true, false, true, true

data.forEach(testCase => {
  console.log("isApproxPalindrome(testCase)", isApproxPalindrome(testCase));
});
