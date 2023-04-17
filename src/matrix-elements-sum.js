const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    return matrix.reduce((acc1, item1, index1) => {
        return acc1 += item1.reduce((acc2, item2, index2, arr) => {
            if (item2 == 0) {
                for (let i = 0; i < matrix.length; i++) {
                    matrix[i][index2] = 0;
                }
                return acc2
            } else return acc2 += arr[index2]
        }, 0);
    }, 0)
}

module.exports = {
    getMatrixElementsSum
};
