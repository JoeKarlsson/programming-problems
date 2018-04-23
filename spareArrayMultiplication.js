const matrix1 = [[0, 1], [2, 3], [3, 3], [3, 4]];
const matrix2 = [[0, 4], [2, 3], [3, 3], [3, 4]];

// O(n^2)
// const spareMatrixMult = (mtrx1, mtrx2) => {
//   let product = [];
//   mtrx1.forEach(cell1 => {
//     mtrx2.forEach(cell2 => {
//       if (cell1[0] === cell2[0] && cell1[1] === cell2[1]) {
//         console.log("hit");
//         product.push(cell1);
//       }
//     });
//   });
//   return product;
// };

const spareMatrixMult = (mtrx1, mtrx2) => {
  let product = [];
  return product;
};

const result = spareMatrixMult(matrix1, matrix2);
console.log(result);
