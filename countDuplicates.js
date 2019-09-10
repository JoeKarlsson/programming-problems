// Given an array of integers, your task is to count the number of duplicate array elements.Duplicate is defined as two or more identical elements.For example, in the array[1, 2, 2, 3, 3, 3], the two twos are one duplicate and so are the three threes.The number of duplicates is 2.

// Function Description:
// Complete the function countDuplicates in the editor below.The function must return an integer denoting the number of non - unique(duplicate) values in the numbers array.

// countDuplicates has the following parameter(s):
// numbers[numbers[0],...numbers[n - 1]]: an array of integers to process

// Constraints:
// 1 ≤ n ≤ 1000
// 1 ≤ numbers[i]≤ 1000, 0 ≤ i < n

// O(n)
function countDuplicates(numbers) {
  let cache = {};
  let numberOfDuplicates = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currNum = numbers[i];

    if (cache.hasOwnProperty(currNum)) {
      if (cache[currNum] <= 1) {
        numberOfDuplicates++;
        cache[currNum] = cache[currNum] + 1;
      }
    } else {
      cache[currNum] = 1;
    }
  }
  return numberOfDuplicates;
}

const testData = [
  [1, 2, 2, 3, 3, 3], // 2
  [(1, 2, 3, 4)], // 0
  [1, 1],  // 1
  [9, 9, 9, 9, 9], // 1
  [0] // 0
];

testData.forEach(testCase => {
  console.log(`countDuplicates( [${testCase}] ) = `, countDuplicates(testCase));
});
