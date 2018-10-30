// fn([1,0,0,0]) => [1,0,0,1]

const counter = arr => {
  //Validation Check
  if (!Array.isArray(arr)) {
    throw new Error("invalid input");
  }
  let i = arr.length - 1;
  let clear = false;

  // keep cycling through array until you reach a num that isn't 9
  while (!clear) {
    // Happy path - just change arr i and exit
    if (arr[i] !== 9) {
      arr[i] = arr[i] + 1;
      clear = true;
    }
    // if arr[i] is 9 - change
    if (arr[i] === 9) {
      arr[i] = 0;
      // if the first digit is 9 and it needs to be incremented - add a 1 to the front
      if (i === 0) {
        arr.unshift(1);
        clear = true;
      }
      i--;
    }
  }

  return arr;
};

// function counter(arr) {
//   let length = arr.length;
//   if (arr[length - 1] < 9) {
//     arr[length - 1] += 1;
//     return arr;
//   } else if (length === 0) {
//     arr.push(1);
//     return arr;
//   } else {
//     arr.pop();
//     counter(arr);
//     arr.push(0);
//     return arr;
//   }
// }

const testData = [[1, 0, 0, 0], [(1, 0, 0, 9)], [9, 9], [9, 9, 9, 9, 9], [0]];

testData.forEach(testCase => {
  console.log("counter(testCase)", counter(testCase));
});
