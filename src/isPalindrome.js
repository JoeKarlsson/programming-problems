// O(2N) => O(N)
const isPalindrome = str => {
  let isValidPalindrome = true;
  let stack = [];

  Array.from(str).forEach(char => {
    stack.push(char);
  });

  Array.from(str).forEach(char => {
    const poppedChar = stack.pop();

    if (char !== poppedChar) {
      isValidPalindrome = false;
    }
  });

  return isValidPalindrome;
};

const testStrings = ["abba", "tacocat", "hannah", "cat", "dog"];

testStrings.forEach(str => {
  console.log(isPalindrome(str));
});
