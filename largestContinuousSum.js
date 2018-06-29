// Given an array of integers (positive and negative) find the largest continuous sum.

// The time complexity is O(N) and space complexity is O(1), which are both optimal.
const largestContinuousSum = (arr) => {
  if (arr.length === 0) {
    throw new Error('Please pass in a non-empty array')
  }
  if (!Array.isArray(arr)) {
    throw new Error('Please pass in an array');
  }
  let maxSum = currentSum = arr[0]

  for(let i=0; i<arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};


// Given a sequence of positive intergers A and an interger T, return whether there is a continuous sequence of A that sums up to exactly T.
// Example:
//
// [23,5,4,7,2,11], 20. Return True becuase 7+2+11=20
// [1,3,5,23,2], 8. Return True because 3+5=8;
// [1,3,5,23,2], 7. Return False because no sequence in this array adds up to 7.

// findSum runs in O(n) time and O(1) space.
const findSum = (arr, target) => {
  if (arr.length === 0) {
    throw new Error('Please pass in a non-empty array')
  }
  if (!Array.isArray(arr) || !typeof target == 'number') {
    throw new Error('Please pass valid input');
  }

  let sum = 0;
  for(let i=0, j=0; i<arr.length; ++i ){
    sum += arr[i];
    while (sum > target) {
      sum -= arr[j];
      ++j;
    }
    if (sum == target) {
      return true;
    }
  }
  return false;
};

console.log('findSum([23,5,4,7,2,11], 20): ', findSum([23,5,4,7,2,11], 20)); // true
console.log('findSum([1,3,5,23,2], 8): ', findSum([1,3,5,23,2], 8)); // true
console.log('findSum([1,3,5,23,2], 7): ', findSum([1,3,5,23,2], 7)); // true

//Source: https://www.careercup.com/question?id=6305076727513088
