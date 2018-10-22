// input [1, 3, [4,6], 0, [ [3, 9], 88]]
// output [1, 3, 4, 6, 0, 3, 9, 88]

const flattenArr = (arr, flatArr = []) => {
  arr.forEach(el => {
    if (Array.isArray(el)) {
      return flattenArr(el, flatArr);
    }
    flatArr.push(el);
  });

  return flatArr;
};

const test1 = [1, 3, [4, 6], 0, [[3, 9], 88]];
console.log(flattenArr(test1));
