const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let objSymbS1 = {};
    let objSymbS2 = {};
    for (let i = 0; i < s1.length; i++) {
        let symb = s1[i]
        objSymbS1[symb] = objSymbS1[symb] !== undefined ? objSymbS1[symb] + 1 : 1;
    }
    for (let i = 0; i < s2.length; i++) {
        let symb = s2[i];
        objSymbS2[symb] = objSymbS2[symb] !== undefined ? objSymbS2[symb] + 1 : 1;
    }
    let call = 0;
    for (const key in objSymbS1) {
        if (objSymbS2.hasOwnProperty(key) && objSymbS1[key] > 0 && objSymbS2[key] > 0) call += Math.min(objSymbS1[key], objSymbS2[key])
    }
    return call;
}

module.exports = {
    getCommonCharacterCount
};
