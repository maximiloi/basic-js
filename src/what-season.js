const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    } else if (!date.getTime || Object.getOwnPropertyNames(date).length > 0) {
        // 1) проверяю возращается ли целое число, если нет вывожу ошибку
        // 2) проверяю, если это объект, перевожу его в массив по ключам и если больше 0 вывожу ошибку
        throw new Error('Invalid date!');
    } else if (date instanceof Date) {
        const month = date.getMonth() + 1;
        if (month === 1 || month === 2 || month === 12) {
            return 'winter';
        } else if (month === 3 || month === 4 || month === 5) {
            return 'spring';
        } else if (month === 6 || month === 7 || month === 8) {
            return 'summer';
        } else {
            return 'autumn';
        }
    }
}

module.exports = {
    getSeason,
};
