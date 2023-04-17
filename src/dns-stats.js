const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let objDomains = {};
    domains.forEach(item => {
        let arr = item.split('.')
        let levelDomain = '';
        for (let i = arr.length - 1; i >= 0; i--) {
            levelDomain += `.${arr[i]}`;
            if (levelDomain in objDomains) {
                objDomains[levelDomain]++;
            } else {
                objDomains[levelDomain] = 1;
            }
        }
    });
    return objDomains;
}

module.exports = {
    getDNSStats
};
