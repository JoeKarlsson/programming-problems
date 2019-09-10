// Given an array of integers arr, and an integer target, write a function that returns true if the sum of any two numbers in arr equal target, and false otherwise.

// O(n)
const arraySums = (arr, target) => {
  if (!Array.isArray(arr) || typeof target !== "number" || arr.length <= 1) {
    return false;
  }

  const complements = {};

  // init completments obj
  arr.forEach(el => {
    if (!(el in complements)) {
      complements[el] = 0;
    }
    complements[el] += 1;
  });

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const complement = target - element;
    if (
      complement === element &&
      complement in complements &&
      complements[complement] > 1
    ) {
      return true;
    } else if (complement !== element && complement in complements) {
      return true;
    }
  }

  return false;
};

console.log("arraySums([], 1) :", arraySums([], 1)); // False
console.log("arraySums([1], 1) :", arraySums([1], 1)); // False
console.log("arraySums([1, 2], 1) :", arraySums([1, 2], 1)); // False
console.log("arraySums([1, 2], 2) :", arraySums([1, 2], 2)); // False
console.log("arraySums([2, 1], 1) :", arraySums([2, 1], 1)); // False
console.log("arraySums([2, 1], 3) :", arraySums([2, 1], 3)); // True
console.log(
  "arraySums([8, 2, 5, 2, 9, -6], 2) :",
  arraySums([8, 2, 5, 2, 9, -6], 2)
); // True
