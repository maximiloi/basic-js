const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
    let nameDreamTeam = [];

    if (Array.isArray(array)) {
        array.forEach(element => {
            if (typeof element === 'string') {
                let newElement = element.trim().toUpperCase();
                nameDreamTeam.push(newElement[0]);
            } else {
                return false;
            }
        });
        return nameDreamTeam.sort().join('');
    } else {
        return false;
    }

    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
}

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));

module.exports = {
    createDreamTeam,
};
