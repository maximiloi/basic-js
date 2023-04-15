const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
// function transform(arr) {
//     let arrRes = [];

//     if (Array.isArray(arr)) {
//         arr.forEach((element, index) => {
//             switch (element) {
//                 case '--discard-next':
//                     if (arr[index + 1] !== undefined) {
//                         arrRes.pop();
//                     }
//                     break;
//                 case '--discard-prev':
//                     arrRes.pop();
//                     break;
//                 case '--double-next':
//                     if (arr[index + 1] !== undefined) {
//                         arrRes.push(arr[index + 1]);
//                     }
//                     break;
//                 case '--double-prev':
//                     if (arr[index - 1] !== undefined) {
//                         arrRes.push(arr[index - 1]);
//                     }
//                     break;

//                 default:
//                     arrRes.push(element);
//                     break;
//             }
//         });
//         return arrRes;
//     } else {
//         throw new Error("'arr' parameter must be an instance of the Array!");
//     }
// }

function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const resArr = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const prev = arr[i - 1];
        const next = arr[i + 1];

        if (current === '--discard-next') {
            i++;
        } else if (current === '--discard-prev') {
            resArr.pop();
        } else if (current === '--double-next') {
            if (next !== undefined) {
                resArr.push(next);
            }
        } else if (current === '--double-prev') {
            if (prev !== undefined) {
                resArr.push(prev);
            }
        } else {
            resArr.push(current);
        }
    }

    return resArr;
}

module.exports = {
    transform,
};
