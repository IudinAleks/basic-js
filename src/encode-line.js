const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let encodeArrSymb = '';
    for (let i = 0; i < str.length; i++) {
        let j = 1;
        let symb = str[i];
        while (str[j + i] == symb) {
            j++;
        }
        i += j - 1;
        if (j > 1) {
            encodeArrSymb += j + symb;
        } else encodeArrSymb += symb;

    }
    return encodeArrSymb
}

module.exports = {
    encodeLine
};
