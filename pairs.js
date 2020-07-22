/**
You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: 

2 - 1 =1, 3 - 2 = 1, and 4 - 3 = 1.

Sample Input

5 2  
1 5 3 4 2  

Sample Output

3

Explanation

There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] .

Source: https://www.hackerrank.com/challenges/pairs/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

 */

// Brute force O(n^2)
// function pairs(k, arr) {
//   let numPairs = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] - arr[j] === k) {
//         numPairs++;
//       }
//     }
//   }

//   return numPairs;
// }

// Fast solution - O(n)
function pairs(k, arr) {
  let cache = {};
  let count = 0;

  // Iterate through the array once, and add each number to a dictionary.
  arr.forEach((num) => {
    cache[num] = num;
  });

  // iterate through a second time, and, for each number, see if that number + k exists in the library. If it does, then you know you have a pair, and can increment anwser
  arr.forEach((num) => {
    const sum = num + k;
    if (sum in cache) {
      count++;
    }
  });

  return count;
}

// console.log(pairs(1, [1, 2, 3, 4])); // 3
console.log(pairs(2, [1, 5, 3, 4, 2])); // 3
