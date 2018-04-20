// We have a list of integers, where:
//
// The integers are in the range 1..n1..n
// The list has a length of n+1n+1
// It follows that our list has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.
//
// Write a function which finds an integer that appears more than once in our list. (If there are multiple duplicates, you only need to find one of them.)

// O(n)
const findDupsFast = nums => {
  let cache = {};
  let dup;

  for (let i = 0; i < nums.length; i++) {
    if (cache.hasOwnProperty(nums[i])) {
      return nums[i];
    }
    cache[nums[i]] = true;
  }
  return false;
};

const findDupsMemEfficeint = nums => {
  let pivot = Math.floor(nums.length / 2);
  console.log(pivot);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 3, 8, 9, 10];

const result = findDupsFast(numbers);
console.log(result);
