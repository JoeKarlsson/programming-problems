/*
 * Complete the 'minSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY num
 *  2. INTEGER k
 */

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function halfRoundedUp(int) {
    return Math.ceil(int / 2);
}

function getSum(arr) {
    return arr.reduce((prev, curr) => {
        return prev + curr;
    })
}

function minSum(num, k, currMinSum = Infinity) {
    if (k <= 0) {
        return currMinSum;
    }

    const randIdx = getRandomInt(num.length);
    num[randIdx] = halfRoundedUp(num[randIdx]);
    let tempSum = getSum(num);

    if (tempSum < currMinSum) {
        return minSum(num, --k, tempSum)
    }
}

const test = [10, 20, 7];
const result = minSum(test, 4);
console.log(result, "result"); // 14