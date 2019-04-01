/*
In nearly every language, there exist various utility functions to convert a string to an integer. Eg. in JavaScript, JSON.parse("4") returns the integer 4.

We want you to rewrite this utility function from scratch. Needless to say, you are not allowed to use any similar utility method that directly does this conversion for you.
*/

/*
 * Complete the 'stringToInt' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING num as parameter.
 */

const stringToIntMap = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
};

function multiplyByTenNTimes(num, n) {
    let product = num;
    while(n>0) {
        product*=10;
        --n;        
    }
    return product;
}

function stringToInt(num) {
    const numArr = num.split("");
    return numArr.map((numStr, idx) => {
        const multiplierAmount = (numArr.length - 1) - idx;
        const numInt = stringToIntMap[numStr];
        return multiplyByTenNTimes(numInt, multiplierAmount);
    })
    .reduce((prev, curr) => prev + curr);

};


// Examples
console.log('stringToInt("513")', stringToInt("513")); //513
console.log('stringToInt("503")', stringToInt("503")); //503
console.log('stringToInt("0")', stringToInt("0")); // 0
