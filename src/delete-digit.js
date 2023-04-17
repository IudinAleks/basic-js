const {NotImplementedError} = require('../extensions/index.js');

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
    let maxNumb = 0;
    let strN = n.toString()
    for (let i = 1; i <= strN.length; i++) {
        let number = 0;
        if (i == 1) {
            number = strN.slice(i)
            maxNumb = maxNumb > +number ? maxNumb : +number
        } else if (i == strN.length) {
            number = strN.slice(0, i - 1)
            maxNumb = maxNumb > +number ? maxNumb : +number
        } else {
            number = strN.slice(0, i - 1) + strN.slice(i)
            maxNumb = maxNumb > +number ? maxNumb : +number
        }
    }
    return maxNumb;
}

module.exports = {
    deleteDigit
};
