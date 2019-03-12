/*
Given a 6x6 2D Array:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

-9 - 9 - 9  1 1 1
0 - 9  0  4 3 2
- 9 - 9 - 9  1 2 3
0  0  8  6 6 0
0  0  0 - 2 0 0
0  0  1  2 4 0
We calculate the following 16 hourglass values:

-63, -34, -9, 12,
-10, 0, 28, 23,
-27, -11, -2, 10,
9, 17, 25, 18

Our highest hourglass value is 28 from the hourglass:

0 4 3
  1
8 6 6

Function Description:
    Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.
*/

function isNotAnEdge(x, y, arr) {
  if (y > 0 && y <= arr.length - 2) {
    if (x > 0 && x <= arr[y].length - 2) {
      return true;
    }
  }
  return false;
}

function calcHourglassSumm (x,y,arr) {
    let sum = 0;
    sum += arr[y+1][x-1]; // top left
    sum += arr[y+1][x]; // top middle
    sum += arr[y+1][x+1]; // top right
    sum += arr[y][x]; // center
    sum += arr[y-1][x-1]; // bottom left
    sum += arr[y-1][x]; // bottom middle
    sum += arr[y-1][x+1]; // bottom right
    return sum;
    
}

function hourglassSum(arr) {
    let maxHourglassSum = -Infinity;

    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[y].length; x++) {
            if (isNotAnEdge(x, y, arr)) {
                const hourglassResult = calcHourglassSumm(x,y,arr);
                if (hourglassResult > maxHourglassSum) {
                    maxHourglassSum = hourglassResult;
                }
            }
        }
    }
    return maxHourglassSum;
}

// 28
const test1 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

console.log('hourglassSum(test1)', hourglassSum(test1));

