const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const numberString = n.toString();
    let newNumberStringArray = [];

    for (let i = 0; i < numberString.length; i++) {
        let newNumberString = '';
        for (let j = 0; j < numberString.length; j++) {
            if (i !== j) {
                newNumberString += numberString[j];
            }
        }
        newNumberStringArray.push(parseInt(newNumberString));
    }

    newNumberStringArray.sort((a, b) => b - a);

    return newNumberStringArray[0];
}

// console.log('deleteDigit(1001): ', deleteDigit(1001));

module.exports = {
    deleteDigit,
};
